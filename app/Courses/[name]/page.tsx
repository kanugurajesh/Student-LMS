// @ts-nocheck
"use client";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress"
import { cn } from '@/lib/utils';
import React from 'react'
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useRive, RiveState, useStateMachineInput, StateMachineInput, Layout, Fit, Alignment, RiveProps } from 'rive-react';

import "@/styles/LoginFormComponent.css";

export default function Page({ params }: { params: { name: string } }) {

    const name = params.name;

    // const [score, setScore] = useState(0);
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [chosen, setChosen] = useState();
    const [content, setContent] = useState();
    const [question, setQuestion] = useState();
    const [progress, setProgress] = useState(10);

    const [userValue, setUserValue] = useState('');
    const [passValue, setPassValue] = useState('');
    const [inputLookMultiplier, setInputLookMultiplier] = useState(0);
    const [loginButtonText, setLoginButtonText] = useState('Login');
    const inputRef = useRef(null);

    const STATE_MACHINE_NAME = 'Login Machine'

    useEffect(() => {
        if (inputRef?.current && !inputLookMultiplier) {
            setInputLookMultiplier(inputRef.current.offsetWidth / 100);
        }
    }, [inputRef])

    const { rive: riveInstance, RiveComponent }: RiveState = useRive({
        src: '/bear.riv',
        stateMachines: STATE_MACHINE_NAME,
        autoplay: true,
        layout: new Layout({
            fit: Fit.Cover,
            alignment: Alignment.Center
        }),
    });

    // State Machine Inputs
    const isCheckingInput: StateMachineInput = useStateMachineInput(riveInstance, STATE_MACHINE_NAME, 'isChecking');
    const numLookInput: StateMachineInput = useStateMachineInput(riveInstance, STATE_MACHINE_NAME, 'numLook');
    const trigSuccessInput: StateMachineInput = useStateMachineInput(riveInstance, STATE_MACHINE_NAME, 'trigSuccess');
    const trigFailInput: StateMachineInput = useStateMachineInput(riveInstance, STATE_MACHINE_NAME, 'trigFail');
    const isHandsUpInput: StateMachineInput = useStateMachineInput(riveInstance, STATE_MACHINE_NAME, 'isHandsUp');


    // read the file from the file system with the `name`
    const readFile = async (name: string) => {
        const markdown = await import(`@/data/${name}.d.ts`);
        return markdown.data;
    }

    const onNext = () => {
        setProgress(progress + 10)

        setCount(count + 1)

        if (question?.correctOption == chosen) {
            setScore(() => score + 1)
            trigSuccessInput.fire()
        } else {
            trigFailInput.fire()
        }

        setQuestion(content?.questions[count + 1])
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
        <div className="around">
            <div className="rive-container">
                <div className="rive-wrapper">
                    <RiveComponent className="rive-container"/>
                </div>
            </div>
            <div className='flex flex-col mt-5 items-center h-screen gap-6'>
                <Progress value={progress} className={cn("w-[60%]")} />
                <div className='w-[60%] flex justify-center'>
                    <h1 className='text-2xl font-bold'>{question?.question}</h1>
                </div>

                <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value={question?.options[0]} id="r1" onClick={(e) => {
                            setChosen(e.target.value)
                        }} />
                        <Label htmlFor="r1">{question?.options[0]}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value={question?.options[1]} id="r2" onClick={(e) => {
                            setChosen(e.target.value)
                        }} />
                        <Label htmlFor="r2">{question?.options[1]}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value={question?.options[2]} id="r3" onClick={(e) => {
                            setChosen(e.target.value)
                        }} />
                        <Label htmlFor="r3">{question?.options[2]}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value={question?.options[3]} id="r4" onClick={(e) => {
                            setChosen(e.target.value)
                        }} />
                        <Label htmlFor="r4">{question?.options[3]}</Label>
                    </div>
                </RadioGroup>
                <Button onClick={() => {
                    onNext()
                }
                }>Next</Button>
            </div>
        </div>
    )
}