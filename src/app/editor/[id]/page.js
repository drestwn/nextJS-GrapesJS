// app/editor/[id]/page.js
import React from 'react';
import GrapeJS from '../../../components/grapejs';

export default function EditorPage({ params }) {
    const { id } = params;

    return (
        <div>
            <GrapeJS pageId={id} />
        </div>
    );
}
