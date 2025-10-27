/* eslint-disable @next/next/no-img-element */
import { Target, Heart, Leaf, Users } from "lucide-react";
const Page = () => {

    const values = [
        {
            icon: Leaf,
            title: "Sustainability",
            description: "Committed to ecological practices and sustainable materials throughout our production.",
        },
        {
            icon: Heart,
            title: "Quality",
            description: "Timeless designs crafted with the best materials and attention to detail.",
        },
        {
            icon: Users,
            title: "Community",
            description: "Building a community of people who value conscious and ethical fashion.",
        },
        {
            icon: Target,
            title: "Innovation",
            description: "Constantly exploring new techniques and technologies to improve our products.",
        },
    ];


    return (
        <div className="min-h-screen bg-background">
            {/* Hero Banner */}
            <div className="relative h-96 md:h-[500px] overflow-hidden">
                <img
                    src="/banner-contact.jpg"
                    alt="Aurora Threads Brand"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/40 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="mb-4 text-8xl text-pretty font-bold">Our History</h1>
                        <p className="max-w-2xl mx-auto ">
                            Creating sustainable and timeless fashion since 2018
                        </p>
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <div>
                            <h2 className="mb-6">The Beginning</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Diversal Threads was born in 2018 with a clear vision: to create clothing that not only looks good,
                                    but also does good. Founded by a team of passionate designers and
                                    environmental activists, our brand emerged from the need to change the fashion
                                    industry.
                                </p>
                                <p>
                                    hat started as a small workshop in the heart of the city has grown
                                    into a global movement for conscious fashion. Every garment tells a story of
                                    careful craftsmanship, ethical materials, and an unwavering commitment to the planet.
                                </p>
                                <p>
                                    Today, we remain true to our founding principles as we grow and
                                    evolve, always aiming to show that fashion can be beautiful,
                                    sustainable, and accessible.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-lg overflow-hidden">
                            <img
                                src="/img-about.jpg"
                                alt="img About"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="mb-4">Mission and Vision</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-card border rounded-lg p-8">
                                <h3 className="mb-4">Our Mission</h3>
                                <p className="text-muted-foreground">
                                    To design and produce high-quality clothing that respects the environment and the people
                                    who create it. We aim to show that it is possible to have style without compromising our
                                    ethical and environmental values.
                                </p>
                            </div>
                            <div className="bg-card border rounded-lg p-8">
                                <h3 className="mb-4">Our Vision</h3>
                                <p className="text-muted-foreground">
                                    To be leaders in transforming the fashion industry towards a more
                                    sustainable future. To inspire other brands and consumers to make more conscious
                                    and responsible choices for the planet.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="mb-4">Our Values</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                The principles that guide every decision we make
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                            <Icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <h3 className="mb-3">{value.title}</h3>
                                        <p className="text-muted-foreground">{value.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;