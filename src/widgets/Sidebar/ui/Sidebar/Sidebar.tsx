import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwicher } from 'widgets/ThemeSwicher';
import { LangSwitchers } from 'widgets/LangSwitchers';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        console.log(collapsed);
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button
                type="button"
                onClick={onToggle}
            >
                toggle
            </button>

            <div className={cls.switchers}>
                <ThemeSwicher />
                <LangSwitchers className={cls.lang} />
            </div>
        </div>
    );
};