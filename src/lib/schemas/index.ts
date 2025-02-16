import { z } from "zod";

const formSchema = z.object({
    firstName: z.string().min(2, 'Ad en az 2 karakter olmalıdır'),
    lastName: z.string().min(2, 'Soyad en az 2 karakter olmalıdır'),
    email: z.string().email('Geçerli bir email adresi giriniz'),
    phone: z.string().regex(/^(\+90|0)?\s*(\d{3})\s*(\d{3})\s*(\d{2})\s*(\d{2})$/, 'Geçerli bir telefon numarası giriniz'),
    school: z.string().min(2, 'Okul adı en az 2 karakter olmalıdır'),
    grade: z.number().min(4, 'Sınıf 4 ile 8 arasında olmalıdır').max(8, 'Sınıf 4 ile 8 arasında olmalıdır'),
    subjects: z.array(z.string()).min(1, 'En az bir ders seçmelisiniz'),
    message: z.string().optional(),
});

export { formSchema };