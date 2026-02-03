import { useState, useRef } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL } from '@ffmpeg/util';

export const useFFmpeg = () => {
    const [ready, setReady] = useState(false);
    const [progress, setProgress] = useState(0);
    const ffmpegRef = useRef(new FFmpeg());

    const load = async () => {
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
        const ffmpeg = ffmpegRef.current;
        
        ffmpeg.on('progress', ({ progress }) => {
            setProgress(progress * 100);
        });

        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        });
        setReady(true);
    };

    return { load, ready, progress, ffmpeg: ffmpegRef.current };
};