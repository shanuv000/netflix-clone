import React from 'react';
import './Banner.css'

const Banner = () => {

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }


    return (
        <header className="banner" style=
            {{
                backgroundSize: 'cover',
                backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
                backgroundPosition: 'center center'

            }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    MOVIE NAME
                </h1>
                <div className="banner__buttons">
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(`This is a test description
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in tellus eget tortor dapibus
                        iaculis. Quisque commodo fringilla magna, dignissim imperdiet justo ornare id. Nunc vehicula arcu
                        erat, et cursus quam mollis a. Curabitur volutpat ante vel magna sagittis, quis pharetra velit
                        tempus. Nulla vehicula euismod leo, accumsan semper ante cursus ut. Curabitur eget neque metus. Sed
                        vestibulum dolor turpis, nec finibus orci euismod et. Mauris tempus, turpis id consectetur
                        vestibulum, purus mi placerat justo, ac porttitor arcu nibh at lorem. Suspendisse sem tortor,
                        tincidunt convallis porttitor ac, rhoncus nec magna. Donec dictum, nibh ac ultrices vestibulum,
                        massa mi vestibulum arcu, sed semper sem sem vel ipsum. Cras accumsan quis eros non rhoncus. In a
                        sollicitudin est, sit amet rutrum libero. Aliquam placerat, elit vitae ornare dignissim, sapien urna
                        dictum diam, vel semper dolor urna tincidunt dui. Nulla dignissim augue vel purus laoreet, non
                        pulvinar nisl sollicitudin.

                        Cras arcu nunc, dapibus vel ante sed, vehicula mattis neque. Orci varius natoque penatibus et magnis
                        dis parturient montes, nascetur ridiculus mus. Maecenas egestas ultrices orci id lacinia. Vestibulum
                        nec ligula sed nunc semper pulvinar in eget sem. Etiam pretium ante sit amet lectus congue gravida.
                        Nulla bibendum fermentum nisi. Quisque ac risus imperdiet metus commodo malesuada nec in mi. Aenean
                        ac aliquam tellus. Vivamus nisi massa, euismod vel dolor eget, eleifend volutpat enim. Quisque leo
                        libero, malesuada id efficitur et, laoreet quis nibh. Interdum et malesuada fames ac ante ipsum
                        primis in faucibus. Cras nibh ipsum, scelerisque aliquam tempus a, venenatis at velit. Pellentesque
                        habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vehicula
                        egestas libero, eget sodales lectus pellentesque non. Duis congue vehicula diam sit amet auctor.
                        Curabitur id congue erat.

                        Praesent congue nulla ut faucibus interdum. Nullam eleifend vel est ut consequat. Suspendisse vitae
                        aliquet nisl. Sed eget dignissim orci. Praesent mi ante, feugiat eleifend tincidunt mollis, ornare
                        ac eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur nisl sed dictum
                        laoreet. Duis sed tristique orci. Vestibulum ut arcu augue.

                        Aliquam euismod auctor velit vitae laoreet. Mauris diam diam, sollicitudin efficitur nibh et,
                        suscipit semper lectus. Praesent sodales ipsum enim, vitae tempus leo tempor at. Pellentesque at
                        tellus eu arcu molestie molestie. Vestibulum metus arcu, pulvinar id porta et, sollicitudin ut ante.
                        Praesent laoreet elementum luctus. Proin eget tempus nisi, eu finibus nibh. In sit amet consectetur
                        sapien. Vivamus sit amet diam dui. Proin aliquet dolor ac pharetra dignissim. Nulla purus urna,
                        auctor in eros rutrum, consectetur blandit sem. Ut lobortis varius velit, vitae mollis leo aliquet
                        vel. Vestibulum facilisis est iaculis ante tempus, consectetur iaculis urna maximus.

                        Curabitur a suscipit sem. Sed rhoncus eros id magna gravida vestibulum. Etiam ornare consequat arcu
                        non eleifend. Nulla accumsan imperdiet dui nec iaculis. In maximus, libero non lacinia finibus,
                        neque nibh dignissim nisl, nec eleifend mauris libero at velit. Curabitur eu tristique neque. Nulla
                        sodales diam est, at tincidunt nibh maximus et. Nunc commodo varius velit. Proin sed tempus arcu,
                        vel euismod augue. Proin enim eros.`, 200)}


                </h1>
            </div>
            <div className="banner--fadeBottom"/>
        </header>
    )
}
export default Banner;