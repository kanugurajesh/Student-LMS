"use client";

import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { name: string } }) {
    const name = params.name;
    const [questions, setQuestions] = useState([{}]);

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
            } catch (error) {
                console.error("Error reading file:", error);
            }
        };
        fetchData();
    }, [name]);

    return (
        <div>
            {/* @ts-ignore */}
            <pre>{JSON.stringify(questions[9]?.question, null, 2)}</pre>
        </div>
    )
}
