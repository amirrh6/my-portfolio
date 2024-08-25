const Card = ({ title = '', desc = '', tags = [''] }) => {
    return (
        <div className="card bg-base-200 w-96 shadow-xl mb-5">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div> */}
                <div className="card-actions justify-end">
                    {tags.map((tag, index) => {
                        return (
                            <div key={index} className="badge badge-outline h-auto text-center">
                                {tag}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Card;
