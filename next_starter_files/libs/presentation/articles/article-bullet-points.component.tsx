'use client';

import { ArticleBullets } from ".prisma/client";
import { NextPage } from "next";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LoadingSpinner from "@/libs/shared/common/loading-spinner.component";

type ArticleBulletPointsPropsType = {
    bulletPoints: ArticleBullets
}

const ArticleBulletPoints: NextPage<ArticleBulletPointsPropsType> = ({ bulletPoints }) => {

    const [usedBulletPoints, setUsedBulletPoints] = useState(bulletPoints);
    const [hasBulledPoints, setHasBulletPoints] = useState(false);

    const router = useRouter();
    const { query: { pid } } = router;

    useEffect(() => {
        if (!hasBulledPoints) {
            setHasBulletPoints(true);
            (async () => fetch('http://localhost:3000/api/get-bullet-points/'))().then(async (data) => {
                const bulletPoints = await data.json();
                setUsedBulletPoints({
                    slug: `${pid}`,
                    bulletPoints
                })
            })
        }

    }, [hasBulledPoints, pid]);

    console.log(usedBulletPoints);

    return usedBulletPoints
        ? <h1>{JSON.stringify(usedBulletPoints)}</h1>
        : <div><h1>Generating</h1><LoadingSpinner /></div>
}

export default ArticleBulletPoints;