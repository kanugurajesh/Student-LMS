"use client";

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress"
import { cn } from '@/lib/utils';
import React from 'react'
import { Button } from "@/components/ui/button";

export default function Page({ params }: { params: { name: string } }) {
    
    const name = params.name;

    // const [score, setScore] = useState(0);
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [chosen, setChosen] = useState();
    const [content, setContent] = useState();
    const [question, setQuestion] = useState();
    const [progress, setProgress] = useState(10);

    // read the file from the file system with the `name`
    const readFile = async (name: string) => {
        const markdown = await import(`@/data/${name}.d.ts`);
        return markdown.data;
    }

    const onNext = () => {
        setProgress(progress+10)

        setCount(count+1)

        console.log(score)

        // @ts-ignore
        if (question?.correctOption == chosen) {
            setScore(() => score + 1)
        }

        // @ts-ignore
        setQuestion(content?.questions[count+1])
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const content = await readFile(name);
                setQuestion(content?.questions[0]);
                setContent(content);
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
                        <RadioGroupItem value={question?.options[0]} id="r1" onClick={(e)=>{
                            // @ts-ignore
                            setChosen(e.target.value)
                        }}/>
                        {/* @ts-ignore */}
                        <Label htmlFor="r1">{question?.options[0]}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        {/* @ts-ignore */}
                        <RadioGroupItem value={question?.options[1]}id="r2" onClick={(e)=>{
                            // @ts-ignore
                            setChosen(e.target.value)
                        }}/>
                        {/* @ts-ignore */}
                        <Label htmlFor="r2">{question?.options[1]}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        {/* @ts-ignore */}
                        <RadioGroupItem value={question?.options[2]}id="r3" onClick={(e)=>{
                            // @ts-ignore
                            setChosen(e.target.value)
                        }}/>
                        {/* @ts-ignore */}
                        <Label htmlFor="r3">{question?.options[2]}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        {/* @ts-ignore */}
                        <RadioGroupItem value={question?.options[3]}id="r4" onClick={(e)=>{
                            // @ts-ignore
                            setChosen(e.target.value)
                        }}/>
                        {/* @ts-ignore */}
                        <Label htmlFor="r4">{question?.options[3]}</Label>
                    </div>
                </RadioGroup>
                <Button onClick={()=>{
                    onNext()
                }
                }>Next</Button>
            </div>
        </>
    )
}
