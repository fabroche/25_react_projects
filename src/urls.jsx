import {Acordion} from "./pages/Acordion/Acordion.jsx";
import RandomColor from "./pages/RandomHex/RandomColor.jsx";
import StarRating from "./pages/StarRating/StarRating.jsx";
import ImageSlider from "./pages/ImageSlider/ImageSlider.jsx";
import LoadMoreButton from "./pages/LoadMoreButton/LoadMoreButton.jsx";
import TreeView from "./pages/TreeView/TreeView.jsx";
import QrCodeGenerator from "./pages/QrCodeGenerator/QrCodeGenerator.jsx";
import menus from "./pages/TreeView/data/TreeViewData.js";
import LightDarkMode from "./pages/LightDarkMode/LightDarkMode.jsx";
import ScrollIdicator from "./pages/ScrollIndicator/ScrollIdicator.jsx";
import {useContext} from "react";
import {ScrollContext} from "./pages/ScrollIndicator/context/ScrollContext.jsx";
import {TabsPresenter} from "./pages/Tabs/TabsPresenter.jsx";

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
            },
            {
                path: "/tabs",
                element: <TabsPresenter/>,
                name: "Tabs",
            },
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