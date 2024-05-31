"use client"
import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './GrapeJS.css';

const GrapeJS = ({ pageId }) => {
    const editorRef = useRef(null);
    const blockPanelRef = useRef(null);

    useEffect(() => {
        const editor = grapesjs.init({
            container: editorRef.current,
            fromElement: true,
            width: 'auto',
            height: '100vh',
            storageManager: {
                type: 'local',
                autosave: true,
                autoload: true,
                stepsBeforeSave: 1,
                store: {
                    load: (keys, clb) => {
                        const data = JSON.parse(localStorage.getItem(`gjs-${pageId}`)) || {};
                        clb(data);
                    },
                    store: (data, clb) => {
                        localStorage.setItem(`gjs-${pageId}`, JSON.stringify(data));
                        clb();
                    },
                },
            },
            blockManager: {
                appendTo: blockPanelRef.current,
            },
            plugins: [],
            pluginsOpts: {},
        });

        // Add custom blocks
        editor.BlockManager.add('text-block', {
            label: 'Text',
            content: '<div class="my-text-block">This is a text block</div>',
            category: 'Basic',
        });

        editor.BlockManager.add('image-block', {
            label: 'Image',
            content: '<img src="https://via.placeholder.com/150" alt="Placeholder image">',
            category: 'Basic',
        });

        return () => {
            // Cleanup logic if needed
            editor.destroy();
        };
    }, [pageId]);

    return (
        <div style={{ display: 'flex' }}>
            <div ref={blockPanelRef} id="blocks" style={{ width: '250px', padding: '10px', borderRight: '1px solid #ddd' }}></div>
            <div ref={editorRef} style={{ flex: 1 }}></div>
        </div>
    );
};

export default GrapeJS;
