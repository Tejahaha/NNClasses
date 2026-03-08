import { useState, useEffect, useRef } from 'react';

/**
 * usePortalState Hook
 * Extracts portal business logic, persistence, and state management.
 */
export function usePortalState(setMobileMenuOpen) {
    const [activeModule, setActiveModule] = useState(() => {
        try { return sessionStorage.getItem('portal_activeModule') || 'dashboard'; } catch { return 'dashboard'; }
    });

    const [selectedItem, setSelectedItem] = useState(null);
    const [classLevel, setClassLevel] = useState(() => {
        try { return sessionStorage.getItem('portal_classLevel') || '11th'; } catch { return '11th'; }
    });
    const [assignmentState, setAssignmentState] = useState(() => {
        try {
            const saved = sessionStorage.getItem('ss_assignmentState');
            return saved ? JSON.parse(saved) : { classLvl: null, subject: null, chapterId: null };
        } catch { return { classLvl: null, subject: null, chapterId: null }; }
    });
    const [qpSidebarOpen, setQpSidebarOpen] = useState(false);
    const prevOverflow = useRef('');

    // iOS scroll lock: disable body scroll when bottom sheet or mobile sidebar opens
    useEffect(() => {
        if (qpSidebarOpen) {
            prevOverflow.current = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = prevOverflow.current;
        }
        return () => { document.body.style.overflow = prevOverflow.current; };
    }, [qpSidebarOpen]);

    // Persist state to sessionStorage
    useEffect(() => {
        try { sessionStorage.setItem('portal_activeModule', activeModule); } catch { }
    }, [activeModule]);

    useEffect(() => {
        try { sessionStorage.setItem('ss_assignmentState', JSON.stringify(assignmentState)); } catch { }
    }, [assignmentState]);

    useEffect(() => {
        try { sessionStorage.setItem('portal_classLevel', classLevel); } catch { }
    }, [classLevel]);

    // Handlers
    const handleClassChange = (level) => {
        setClassLevel(level);
        setAssignmentState({ classLvl: level, subject: null, chapterId: null });
    };

    const handleModuleSelect = (moduleId) => {
        setActiveModule(moduleId);
        if (moduleId !== 'question-papers') setSelectedItem(null);
        if (setMobileMenuOpen) setMobileMenuOpen(false);
    };

    const handleYearSelect = (item) => {
        setSelectedItem(item);
        setQpSidebarOpen(false);
    };

    return {
        activeModule,
        setActiveModule,
        selectedItem,
        setSelectedItem,
        classLevel,
        setClassLevel,
        assignmentState,
        setAssignmentState,
        qpSidebarOpen,
        setQpSidebarOpen,
        handleClassChange,
        handleModuleSelect,
        handleYearSelect
    };
}

export default usePortalState;
