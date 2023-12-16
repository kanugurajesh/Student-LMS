"use client";

import { useEffect, useState } from 'react';

export default function Page({ params }: { params: { name: string } }) {
    const name = params.name;
    const [fileContent, setFileContent] = useState<string | null>(null);

    // read the file from the file system with the `name`
    const readFile = async (name: string) => {
        const markdown = await import(`@/data/${name}.d.ts`);
        return markdown.data;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const content = await readFile(name);
                setFileContent(content);
            } catch (error) {
                console.error("Error reading file:", error);
            }
        };

        fetchData();
    }, [name]);

    return (
        <div>
            <h1>{name}</h1>
            <pre>{JSON.stringify(fileContent, null, 2)}</pre>
        </div>
    )
}
