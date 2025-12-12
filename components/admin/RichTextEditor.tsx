"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color';
import {TextStyle} from '@tiptap/extension-text-style';
import { Bold, Heading1, Heading2, List, ListOrdered, type LucideIcon } from 'lucide-react';

// --- 1. WYCIĄGAMY KOMPONENT NA ZEWNĄTRZ ---
// Definiujemy go raz, poza innymi funkcjami
interface MenuButtonProps {
    onClick: () => void;
    isActive?: boolean;
    icon: LucideIcon;
    label?: string;
}

const MenuButton = ({ onClick, isActive, icon: Icon, label }: MenuButtonProps) => (
    <button
        onClick={(e) => { e.preventDefault(); onClick(); }}
        className={`p-2 rounded hover:bg-gray-100 transition-colors ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
        title={label}
        type="button" // Ważne: żeby nie submitował formularza
    >
        <Icon size={18} />
    </button>
);

// --- 2. TERAZ UŻYWAMY GO W MENU BAR ---
const MenuBar = ({ editor }: { editor: any }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="border-b border-gray-200 p-2 flex flex-wrap gap-2 items-center bg-gray-50 rounded-t-lg">

            <MenuButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                isActive={editor.isActive('bold')}
                icon={Bold}
                label="Pogrubienie"
            />

            <div className="w-px h-6 bg-gray-300 mx-1" />

            <MenuButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                isActive={editor.isActive('heading', { level: 2 })}
                icon={Heading1}
                label="Duży nagłówek"
            />
            <MenuButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                isActive={editor.isActive('heading', { level: 3 })}
                icon={Heading2}
                label="Średni nagłówek"
            />

            <div className="w-px h-6 bg-gray-300 mx-1" />

            <MenuButton
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                isActive={editor.isActive('bulletList')}
                icon={List}
                label="Lista punktowana"
            />
            <MenuButton
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                isActive={editor.isActive('orderedList')}
                icon={ListOrdered}
                label="Lista numerowana"
            />

            <div className="w-px h-6 bg-gray-300 mx-1" />

            {/* Kolory zostają bez zmian, bo to zwykłe buttony HTML */}
            <div className="flex items-center gap-1">
                <button
                    onClick={(e) => { e.preventDefault(); editor.chain().focus().setColor('#000000').run(); }}
                    className={`w-6 h-6 rounded border ${editor.isActive('textStyle', { color: '#000000' }) ? 'ring-2 ring-blue-500' : 'border-gray-300'}`}
                    style={{ backgroundColor: '#000000' }}
                    title="Czarny"
                />
                <button
                    onClick={(e) => { e.preventDefault(); editor.chain().focus().setColor('#1d4ed8').run(); }}
                    className={`w-6 h-6 rounded border ${editor.isActive('textStyle', { color: '#1d4ed8' }) ? 'ring-2 ring-blue-500' : 'border-gray-300'}`}
                    style={{ backgroundColor: '#1d4ed8' }}
                    title="Niebieski"
                />
                <button
                    onClick={(e) => { e.preventDefault(); editor.chain().focus().setColor('#dc2626').run(); }}
                    className={`w-6 h-6 rounded border ${editor.isActive('textStyle', { color: '#dc2626' }) ? 'ring-2 ring-blue-500' : 'border-gray-300'}`}
                    style={{ backgroundColor: '#dc2626' }}
                    title="Czerwony"
                />
            </div>

        </div>
    );
};

interface RichTextEditorProps {
    value: string;
    onChange: (html: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextStyle,
            Color,
        ],
        content: value,
        immediatelyRender: false, // Ta poprawka musi zostać!
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose max-w-none focus:outline-none min-h-[200px] p-4 text-gray-800',
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    return (
        <div className="border border-gray-300 rounded-lg shadow-sm bg-white overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
}