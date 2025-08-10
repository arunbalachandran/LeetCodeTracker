import { DEFAULT_SEEN_PROBLEMS, DEFAULT_REPETITION_INTERVALS } from './defaultState';

// Storage keys for localStorage
export const STORAGE_KEYS = {
    SEEN_PROBLEMS: 'seenProblems',
    REPETITION_INTERVALS: 'repetitionIntervals'
} as const;

// Types for the stored data
export interface RepetitionInterval {
    interval: number;
    lastSolved: number;
}

export interface StoredState {
    seenProblems: Map<string, boolean>;
    repetitionIntervals: Map<string, RepetitionInterval>;
}

// Default state values from defaultState.ts
export const DEFAULT_STATE: StoredState = {
    seenProblems: new Map<string, boolean>(Object.entries(DEFAULT_SEEN_PROBLEMS)),
    repetitionIntervals: new Map<string, RepetitionInterval>(Object.entries(DEFAULT_REPETITION_INTERVALS))
};

// Storage utility functions
export class StorageManager {
    /**
     * Load state from localStorage or return default state if nothing exists
     */
    static loadState(): StoredState {
        try {
            const storedProblems = localStorage.getItem(STORAGE_KEYS.SEEN_PROBLEMS);
            const storedIntervals = localStorage.getItem(STORAGE_KEYS.REPETITION_INTERVALS);
            
            const seenProblems = storedProblems 
                ? new Map<string, boolean>(Object.entries(JSON.parse(storedProblems)))
                : new Map<string, boolean>();
                
            const repetitionIntervals = storedIntervals
                ? new Map<string, RepetitionInterval>(Object.entries(JSON.parse(storedIntervals)))
                : new Map<string, RepetitionInterval>();
            
            return { seenProblems, repetitionIntervals };
        } catch (error) {
            console.warn('Error loading state from localStorage, using default state:', error);
            return DEFAULT_STATE;
        }
    }

    /**
     * Save seen problems to localStorage
     */
    static saveSeenProblems(seenProblems: Map<string, boolean>): void {
        try {
            localStorage.setItem(STORAGE_KEYS.SEEN_PROBLEMS, JSON.stringify(Object.fromEntries(seenProblems)));
        } catch (error) {
            console.error('Error saving seen problems to localStorage:', error);
        }
    }

    /**
     * Save repetition intervals to localStorage
     */
    static saveRepetitionIntervals(repetitionIntervals: Map<string, RepetitionInterval>): void {
        try {
            localStorage.setItem(STORAGE_KEYS.REPETITION_INTERVALS, JSON.stringify(Object.fromEntries(repetitionIntervals)));
        } catch (error) {
            console.error('Error saving repetition intervals to localStorage:', error);
        }
    }

    /**
     * Save entire state to localStorage
     */
    static saveState(state: StoredState): void {
        this.saveSeenProblems(state.seenProblems);
        this.saveRepetitionIntervals(state.repetitionIntervals);
    }

    /**
     * Clear all stored data
     */
    static clearAll(): void {
        localStorage.removeItem(STORAGE_KEYS.SEEN_PROBLEMS);
        localStorage.removeItem(STORAGE_KEYS.REPETITION_INTERVALS);
    }

    /**
     * Check if any stored data exists
     */
    static hasStoredData(): boolean {
        return !!(localStorage.getItem(STORAGE_KEYS.SEEN_PROBLEMS) || localStorage.getItem(STORAGE_KEYS.REPETITION_INTERVALS));
    }
}

// Export default instance for convenience
export default StorageManager; 