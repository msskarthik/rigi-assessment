import { useEffect, useState } from "react";

import SearchIcon from "../../assets/search-icon.svg";
import EmptyTemplate from "../../assets/empty-template.svg";

import data from "../../constants/data.json";

const BodyComponent = () => {
    const [videosList, setVideosList] = useState<any>(data.categories[0].videos);
    const [dragItem, setDragItem] = useState<any>(null);
    const [inputVal, setInputVal] = useState<string>("");

    useEffect(() => {
        let videos = data.categories[0].videos;
        videos = videos.map((item: any, index: number) => { return { ...item, sortOrder: index + 1 } });
        setVideosList(videos);
    }, []);

    const handleDrop = (e: any, currentElm: any) => {
        let modifiedArr: any[] = [];
        let currentIndex = videosList.findIndex((item: any) => item.title === currentElm.title);
        let dragIndex = videosList.findIndex((item: any) => item.title === dragItem);
        if (currentIndex !== dragIndex) {

            let checkPosition = dragIndex > currentIndex ? "dragUp" : "dragDown";
            if (checkPosition === "dragUp") {
                let elementsWithin = videosList.filter((item: any, index: number) => index >= currentIndex && index <= dragIndex);
                let remainElms = videosList.filter((item: any, index: number) => index > dragIndex);
                let firstElms = videosList.filter((item: any, index: number) => index < currentIndex);
                elementsWithin = elementsWithin.map((item: any, index: number) => {
                    if (item.title !== dragItem) {
                        item.sortOrder = item.sortOrder + 1;
                        return item;
                    } else if (item.title === dragItem) {
                        item.sortOrder = currentElm.sortOrder - 1;
                        return item;
                    }
                    return item;
                });
                modifiedArr = [...firstElms, ...elementsWithin, ...remainElms];
            } else {
                let elementsWithin = videosList.filter((item: any, index: number) => index <= currentIndex && index >= dragIndex);
                let remainElms = videosList.filter((item: any, index: number) => index > currentIndex);
                let firstElms = videosList.filter((item: any, index: number) => index < dragIndex);
                elementsWithin = elementsWithin.map((item: any, index: number) => {
                    if (item.title !== dragItem) {
                        item.sortOrder = item.sortOrder - 1;
                        return item;
                    } else if (item.title === dragItem) {
                        item.sortOrder = currentElm.sortOrder;
                        return item;
                    }
                    return item;
                });
                modifiedArr = [...firstElms, ...elementsWithin, ...remainElms];
            }
            modifiedArr.sort((a, b) => a.sortOrder - b.sortOrder);
            setVideosList(modifiedArr);
        }
    }

    const handleDragStart = (e: DragEvent, title: string) => {
        let elm = document.getElementById(title) as HTMLElement;
        setDragItem(title);
        const event: any = e.dataTransfer;
        event.effectAllowed = "move";
        event.setDragImage(elm, 40, 40);
    };

    const handleDragOver = (e: any) => {
        e.preventDefault();
    };

    const filterFunction = (val: any) => {
        setInputVal(val);
        let videos = data.categories[0].videos;
        videos = videos.filter((item: any) => item.title.toLowerCase().includes(val.toLowerCase()) || item.subtitle.toLowerCase().includes(val.toLowerCase()));
        setVideosList(videos);
    };

    return (
        <div className="p-4 mt-2 flex flex-col gap-6 absolute top-56 w-full">
            <div className="text-3xl w-full flex pb-4 font-bold text-left main-color justify-between border-bottom">Diverse Playlist
                <div className="relative w-72 flex align-middle">
                    <input
                        className="border border-gray-300 rounded-lg px-8 py-2 h-10 placeholder-gray-400 text-gray-700 text-sm w-full focus:outline-none"
                        type="text"
                        value={inputVal}
                        onChange={(e: any) => filterFunction(e.target.value)}
                        placeholder="Search..."
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                        <img src={SearchIcon} alt="search-icon" width={20} height={20} />
                    </div>
                </div>
            </div>
            {
                videosList.length > 0 ?
                    <div className="grid grid-cols-1 w-full sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 gap-2">
                        {
                            videosList.map((eachVideo: any) => (
                                <div draggable={inputVal.length > 0 ? false : true} onDragStart={(e: any) => handleDragStart(e, eachVideo.title)} onDragOver={(e: any) => handleDragOver(e)} onDrop={(e: any) => handleDrop(e, eachVideo)} id={eachVideo.title} key={`video__${eachVideo.title}`} className="w-full flex flex-col justify-between gap-1 h-auto shadow-xl bg-light-1">
                                    <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
                                        <video autoPlay loop muted className="absolute rounded-tl-2xl rounded-tr-2xl inset-0 w-full h-full object-cover" controls
                                            poster={`https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${eachVideo.thumb}`}
                                        >
                                            <source src={eachVideo.sources[0]} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className=" p-4 w-full text-left cursor-grab">
                                        <div className="text-white text-2xl text-left">{eachVideo.title}</div>
                                        <div className="text-white text-sm text-left">{eachVideo.subtitle}</div>
                                        <div className="mb-2 text-white text-md text-left overflow-hidden overflow-ellipsis max-h-[3em] line-clamp-2" title={eachVideo.description}>
                                            {eachVideo.description}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div> : <div className="w-full flex flex-col gap-2 justify-between">
                        <img src={EmptyTemplate} width={250} height={250} alt="no-results-found" />
                        <span className="text-xl text-gray-900 font-bold">No videos found</span>
                    </div>
            }
        </div>
    )
};

export default BodyComponent;