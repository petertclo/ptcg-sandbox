"use client";

import { type } from "os";
import Image from "next/image";
export default function Playmat () {

    const prizes = [{
        name: "Beedrill V",
        set: "ASR",
        setno: "001",
        url:"/img/ASR_001.jpg",
        benchable: true,
        attachable: false,
    },
    {
        name: "Beedrill V",
        set: "ASR",
        setno: "001",
        url:"/img/ASR_001.jpg",
        benchable: true,
        attachable: false,
    },
    {
        name: "Beedrill V",
        set: "ASR",
        setno: "001",
        url:"/img/ASR_001.jpg",
        benchable: true,
        attachable: false,
    },
    {
        name: "Beedrill V",
        set: "ASR",
        setno: "001",
        url:"/img/ASR_001.jpg",
        benchable: true,
        attachable: false,
    },
    {
        name: "Beedrill V",
        set: "ASR",
        setno: "001",
        url:"/img/ASR_001.jpg",
        benchable: true,
        attachable: false,
    },
    {
        name: "Beedrill V",
        set: "ASR",
        setno: "001",
        url:"/img/ASR_001.jpg",
        benchable: true,
        attachable: false,
    },];
    return (

    <div>
        <h1>Playmat</h1>
        <div className="flex h-full w-full items-center justify-between flex-nowrap">
            <div>
                <Prizes cards={prizes} cardSize={150}></Prizes>
            </div>
        </div>
    </div>
    );
};

type Card = {
    name: string;
    set: string;
    setno: string;
    url: string;
    benchable: boolean;
    attachable: boolean;
} | null;

type PrizesProps = {
    cards: Card[];
    cardSize: number;
};

function Prizes({cards , cardSize}: PrizesProps) {
    return (
        <div className="grid grid-cols-2 gap-4">
            
                {cards.slice(0, 6).map((card) => (
                    <Image
                         key={
                            (card?.set?? "") + (card?.setno ?? "")}
                        src={card?.url ?? ""}
                        alt={card?.name ?? "Placeholder"}
                        width={cardSize}
                        height={cardSize*1.4}
                    />
                ))}
            
        </div>
    );
}


