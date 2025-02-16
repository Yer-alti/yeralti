import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { sendEmail } from '$lib/server/email';
import { z } from 'zod';
import type { PageServerLoad } from './$types';
import { formSchema } from '$lib/schemas';

export const load: PageServerLoad = async () => {
    const form = await superValidate(zod(formSchema));
    return { form };
};

export const actions = {
    default: async ({ request }: { request: Request }) => {
        const form = await superValidate(request, zod(formSchema));
        if (!form.valid) {
            return fail(400, { form });
        }

        try {
            await sendEmail({
                to: 'acaalp.25@robcol.k12.tr',
                subject: 'Yeni Öğrenci Başvurusu',
                html: `
                    <h1>Yeni Başvuru</h1>
                    <p><strong>Ad Soyad:</strong> ${form.data.firstName} ${form.data.lastName}</p>
                    <p><strong>Email:</strong> ${form.data.email}</p>
                    <p><strong>Telefon:</strong> ${form.data.phone}</p>
                    <p><strong>Okul:</strong> ${form.data.school}</p>
                    <p><strong>Sınıf:</strong> ${form.data.grade}</p>
                    <p><strong>Dersler:</strong> ${form.data.subjects.join(', ')}</p>
                    <p><strong>Mesaj:</strong> ${form.data.message || '-'}</p>
                `
            });

            return {
                form,
                success: true
            };
        } catch (error) {
            return fail(500, {
                form,
                error: 'Sistemlerimiz şu anda meşgul. Lütfen daha sonra tekrar deneyin ya da bizimle iletişime geçin.'
            });
        }
    }
};