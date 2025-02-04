import {Acordion} from "./Acordion/Acordion.jsx";
import RandomColor from "./RandomHex/RandomColor.jsx";
import StarRating from "./StarRating/StarRating.jsx";
import ImageSlider from "./ImageSlider/ImageSlider.jsx";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton.jsx";
import TreeView from "./TreeView/TreeView.jsx";
import QrCodeGenerator from "./QrCodeGenerator/QrCodeGenerator.jsx";
import menus from "./TreeView/data/TreeViewData.js";
import LightDarkMode from "./LightDarkMode/LightDarkMode.jsx";
import ScrollIdicator from "./ScrollIndicator/ScrollIdicator.jsx";
import {useContext} from "react";
import {ScrollContext} from "./ScrollIndicator/context/ScrollContext.jsx";

function useUrls() {
    const {scrollPercentage} = useContext(ScrollContext);

    const routes = [
            // {
            //     path: "/",
            //     element: <Home/>,
            //     name: "Home",
            // },
            {
                path: "/acordion",
                element: <Acordion/>,
                name: "Acordion",
            },
            {
                path: "/random-color",
                element: <RandomColor/>,
                name:
                    "RandomColor",
            },
            {
                path: "/star-rating",
                element: <StarRating/>,
                name: "StarRating",
            },
            {
                path: "/image-slider",
                element: <ImageSlider/>,
                name: "ImageSlider",
            }
            , {
                path: "/loadmore-btn",
                element: <LoadMoreButton/>,
                name: "LoadMoreButton",
            }
            , {
                path: "/tree-view",
                element: <TreeView menus={menus}/>,
                name: "TreeView",
            }
            , {
                path: "/qr-code-generator",
                element: <QrCodeGenerator/>,
                name: "QrCodeGenerator",
            },
            {
                path: "/light-dark-mode",
                element: <LightDarkMode/>,
                name: "LightDarkMode",
            },
            {
                path: "/scroll-indicator",
                element: <ScrollIdicator scrollPercentage={scrollPercentage}/>,
                name: "ScrollIndicator",
            }
        ]
    ;

    const ActiveLinkStyles = {
        active: "navbar-item navbar-item--active",
        inactive: "navbar-item",
    }

    return {
        routes,
        ActiveLinkStyles,
    };
}

export default useUrls;