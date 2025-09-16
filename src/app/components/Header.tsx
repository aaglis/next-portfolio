import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="max-w-7xl mx-auto shadow-md mt-4 flex gap-4 p-4 w-fit rounded-3xl border">
            <Button>Início</Button>
            <Button variant={'outline'}>Sobre</Button>
            <Button variant={'outline'}>Experiência</Button>
            <Button variant={'outline'}>Projetos</Button>
            <Button variant={'outline'}>Habilidades</Button>
            <Button variant={'outline'}>Contato</Button>
        </header>
    );
}