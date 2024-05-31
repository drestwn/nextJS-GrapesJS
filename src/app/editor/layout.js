// app/editor/layout.js
import React from 'react';

export default function EditorLayout({ children }) {
    return (
        <div>
            <header>
                <h1>Editor</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}
