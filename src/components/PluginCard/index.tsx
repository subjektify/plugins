export interface PluginCardProps {
    title: string;
    meta?: string;
    imageUrl?: string;
    description: string;
    link: string;
}

export default function PluginCard({ title, meta, description, link }: PluginCardProps) {
    return (
        <div className="col">
        <div className="card">
            <div className="card__header">
                <h3 className="margin-bottom--xs">{title}</h3>
                <p>{meta}</p>
            </div>
            <div className="card__body">
                <p>
                    {description}
                </p>
            </div>
            <div className="card__footer">
                <button className="button button--secondary button--block">Learn More</button>
            </div>
        </div>
        </div>
    );
}
