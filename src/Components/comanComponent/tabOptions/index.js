import React from "react";
import { map } from "lodash";
import './tabOption.css'


const TabOptions = ({activeTab,setActiveTab}) => {
    const tabs = [
        {
            id: "1",
            name: "Delivery",
            activeImg: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
            backdrop: "#fceec0",
            inActiveimg: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
        },
        {
            id: "2",
            name: "DiningOut",
            activeImg: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            backdrop: "#e5f3f3",
            inActiveimg: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
        }
    ];

    


    return(
        <div className="tabOption">
            <div className="max-width flex">
                {map(tabs,(tab) => {
                    return(
                        <div key={tab.id} onClick={() => setActiveTab(tab.name)} className={`tab-item absolute-center cur-po ${ activeTab === tab.name && "activeTab"}`}>
                            <div className="tab-img-container absolute-center"
                                style={{backgroundColor: `${activeTab === tab.name ? tab.backdrop : "" }`}} >
                                    <img className="tabImg" src={activeTab === tab.name ? tab.activeImg : tab.inActiveimg} alt={tab.name} />
                            </div>
                            <div className="tabName">{tab.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default TabOptions;