const ChartCard = ({title, value, subtitle, trend, children}) => {
    return (
        <div className="chart-card">
            <p className="chart-title">{title}</p>
            <p className="chart-value">{value}</p>
            <div className="chart-sub">
                <p>{subtitle}</p>
                <p className="trend">{trend}</p>
            </div>
            {children}
        </div>
    );
};

export default ChartCard;
