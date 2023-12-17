"use client"
import React from 'react';
import { Card } from '@/components/ui/card';

export default function LeaderboardPage() {
    return (
        <div className='flex justify-center items-center p-20 h-screen'>
            <Card className='p-20'>
                <table>
                    <tr>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>Rajesh</td>
                        <td>500pts</td>
                    </tr>
                    <tr>
                        <td>Shravan</td>
                        <td>400pts</td>
                    </tr>
                    <tr>
                        <td>madhur</td>
                        <td>300pts</td>
                    </tr>
                    <tr>
                        <td>yashwanth</td>
                        <td>200pts</td>
                    </tr>
                </table>
            </Card>
        </div>
    );
}
