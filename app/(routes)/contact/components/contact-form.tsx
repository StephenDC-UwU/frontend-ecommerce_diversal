import { Mail, Phone, MapPin, Clock } from "lucide-react";

// Importa los componentes de shadcn/ui que necesitas
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// --- Componente auxiliar para los ítems de contacto ---
interface ContactItemProps {
    icon: React.ReactNode;
    title: string;
    value: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, value }) => (
    <Card className="shadow-none border-none bg-gray-50 dark:bg-gray-800">
        <CardContent className="flex items-start gap-4 p-4">
            <div className="rounded-full bg-white dark:bg-gray-900 p-2 text-primary">
                {icon}
            </div>
            <div>
                <CardTitle className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {title}
                </CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">{value}</p>
            </div>
        </CardContent>
    </Card>
);

// --- Componente Principal ---
export function ContactFormSection() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica para enviar el formulario aquí
        console.log("Mensaje enviado");
    };

    return (
        <div className="container max-w-6xl py-12 px-4 md:py-24">
            {/* Título de la Sección */}
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <p className="mb-10 text-gray-600 dark:text-gray-400">
                {`Reach out to us through any of the following channels. We're here to
                help!`}
            </p>

            {/* Grid de 2 Columnas */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                {/* Columna Izquierda: Detalles de Contacto */}
                <div>
                    <div className="space-y-4">
                        <ContactItem
                            icon={<Mail className="w-5 h-5" />}
                            title="Email"
                            value="hello@company.com"
                        />
                        <ContactItem
                            icon={<Phone className="w-5 h-5" />}
                            title="Phone"
                            value="+1 (555) 123-4567"
                        />
                        <ContactItem
                            icon={<MapPin className="w-5 h-5" />}
                            title="Office"
                            value="123 Business Street, Suite 100, New York, NY 10001"
                        />
                        <ContactItem
                            icon={<Clock className="w-5 h-5" />}
                            title="Business Hours"
                            value="Monday - Friday, 9:00 AM - 6:00 PM EST"
                        />
                    </div>
                </div>

                {/* Columna Derecha: Formulario */}
                <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Campo Name */}
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your name" />
                        </div>

                        {/* Campo Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        {/* Campo Subject */}
                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" placeholder="How can we help?" />
                        </div>

                        {/* Campo Message */}
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                placeholder="Tell us more about your inquiry..."
                                rows={5}
                            />
                        </div>

                        {/* Botón de Enviar */}
                        <Button type="submit" className="w-full">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}