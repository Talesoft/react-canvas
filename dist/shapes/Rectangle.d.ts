export interface RectangleProps {
    x: number;
    y: number;
    width: number;
    height: number;
    fill?: string;
    stroke?: string;
}
export default function Rectangle({ x, y, width, height, fill, stroke }: RectangleProps): null;
