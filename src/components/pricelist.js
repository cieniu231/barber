import {useTheme} from "./ThemeContext";

const PriceList = ({prices, title}) => {

    return (
        <div className="blog-list">
            <h2> {prices.name} </h2>
                <div>
                    <table  className="table-rwd">
                        <tbody >
                            <tr>
                                <td width="80%">hair-cut</td>
                                <td width="20%">{prices.haircut}</td>
                            </tr>
                            <tr>
                                <td width="80%">beard</td>
                                <td width="20%">{prices.beard}</td>
                            </tr>
                            <tr>
                                <td width="80%">combo</td>
                                <td width="20%">{prices.combo}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    );
}

export default PriceList;