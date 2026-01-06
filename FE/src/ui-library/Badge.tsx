interface BadgeProps {
    count: number;
}

const Badge: React.FC<BadgeProps> = ({ count }) => {
    return (
        <div className="rounded-full bg-gray-200 text-gray-800 text-xs font-semibold px-2 ml-2 inline-block">
            {count}
        </div>
    );
}

export default Badge;