// index.ts
export const years = Array.from({ length: 2025 - 1980 }, (_, i) => (1980 + i).toString());
export const months = Array.from({ length: 12 - 1 }, (_, i) => (1 + i).toString());
export const days = Array.from({ length: 30 - 1 }, (_, i) => (1 + i).toString());
export const gender = Array.from({ 0: '성별 선택', 1: '남성', 2: '여성', 3: '밝히고 싶지 않음', length: 4 });
