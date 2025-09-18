import MeImage from "../../../public/me.jpg";
import { Lightbulb, Code, Users, Heart } from "lucide-react";

export default function About() {

    const softSkills = [
        { icon: <Lightbulb size={20} />, title: "Inovação", description: "Sempre buscando novas ideias e soluções criativas." },
        { icon: <Code size={20} />, title: "Qualidade de Código", description: "Escrevo código limpo, eficiente e bem documentado." },
        { icon: <Users size={20} />, title: "Colaboração", description: "Trabalho em equipe para alcançar objetivos comuns." },
        { icon: <Heart size={20} />, title: "Paixão", description: "Amor pelo que faço, refletido na qualidade do meu trabalho." },
    ]

    return (
        <div className="max-w-7xl mx-auto mt-50 p-4 flex gap-52 items-center">
            <div className="max-w-xl flex flex-col gap-4">
                <span className="uppercase text-slate-700 font-semibold">Sobre mim</span>
                <h2 className="text-5xl font-bold mb-4">Quem sou eu, minhas experiências digitais</h2>
                <div className="w-16 h-1 bg-slate-700 rounded-md"></div>
                <div>
                    <p className="text-lg mb-4">
                        Sou um desenvolvedor fullstack apaixonado por criar soluções inovadoras
                        e eficientes. Com experiência em diversas tecnologias, estou sempre em
                        busca de novos desafios para aprimorar minhas habilidades.
                    </p>
                    <p className="text-lg mb-4">
                        Ao longo da minha carreira, tive a oportunidade de trabalhar em projetos
                        variados, desde pequenas aplicações até sistemas complexos. Minha abordagem
                        é focada na qualidade do código, usabilidade e desempenho.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-4">Minhas Qualidades</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {softSkills.map((skill) => (
                            <div key={skill.title} className="flex gap-4 items-start">
                                <div className="p-3 bg-slate-100 rounded-lg shadow-md">
                                    {skill.icon}
                                </div>
                                <div>
                                    <h4 className=" font-semibold">{skill.title}</h4>
                                    <p className="text-md text-slate-600">{skill.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>  
                </div>
                <div className="flex gap-4">
                    <ul className="flex gap-2 mt-6">
                        <li className="flex flex-col items-center">
                            <span className="font-bold">3+</span>
                            <p>Anos de Experiência</p>
                        </li>
                        <li className="flex flex-col items-center h-12 border-x-2 px-4">
                            <span className="font-bold">10+</span>
                            <p>Projetos Completos</p>
                        </li>
                        <li className="flex flex-col items-center">
                            <span className="font-bold">2+</span>
                            <p>Empresas Colaboradas</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <img src={MeImage.src} alt="Aglis Photo" className="w-[400px] h-[600px] object-cover rounded-2xl shadow-lg"/>
            </div>
        </div>
    )
}