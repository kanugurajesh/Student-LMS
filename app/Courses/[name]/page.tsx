"use client";

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress"
import { cn } from '@/lib/utils';
import React from 'react'

export default function Page({ params }: { params: { name: string } }) {
    
    const name = params.name;
    const [questions, setQuestions] = useState([{}]);
    const [question, setQuestion] = useState();
    const [progress, setProgress] = useState(10);

    // read the file from the file system with the `name`
    const readFile = async (name: string) => {
        const markdown = await import(`@/data/${name}.d.ts`);
        return markdown.data;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const content = await readFile(name);
                setQuestions(content?.questions);
                setQuestion(content?.questions[0]);
            } catch (error) {
                console.error("Error reading file:", error);
            }
        };
        fetchData();
    }, [name]);

    return (
        <>
            <div className='flex flex-col mt-5 items-center h-screen gap-10'>
                {/* @ts-ignore */}
                <Progress value={progress} className={cn("w-[60%]")} />
                <div className='w-[60%] flex justify-center'>
                    {/* @ts-ignore */}
                    <h1 className='text-2xl font-bold'>{question?.question}</h1>
                </div>
                <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                        {/* @ts-ignore */}
                        <RadioGroupItem value={question?.options[0]} id="r1" />
                        {/* @ts-ignore */}
                        <Label htmlFor="r1">{question?.options[0]}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        {/* @ts-ignore */}
                        <RadioGroupItem value={question?.options[1]}id="r2" />
                        {/* @ts-ignore */}
                        <Label htmlFor="r2">{question?.options[1]}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        {/* @ts-ignore */}
                        <RadioGroupItem value={question?.options[2]}id="r3" />
                        {/* @ts-ignore */}
                        <Label htmlFor="r3">{question?.options[2]}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        {/* @ts-ignore */}
                        <RadioGroupItem value={question?.options[3]}id="r4" />
                        {/* @ts-ignore */}
                        <Label htmlFor="r4">{question?.options[3]}</Label>
                    </div>
                </RadioGroup>
                <button onClick={()=>{
                    setProgress(progress+10)
                }}>update</button>
            </div>
        </>
    )
}
