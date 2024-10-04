const Card = ({ items, title }) => {
    return (
        <div className="mb-8">
            {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4">
                        <img src={item.image} alt={item.alt} className="w-full h-auto rounded-lg" />
                        <h3 className="mt-2 text-center">{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
