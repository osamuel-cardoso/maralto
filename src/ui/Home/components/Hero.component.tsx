import Link from 'next/link'
import Marquee from 'react-fast-marquee'

import { Container } from '@/components/Container/Container.component'
import condeHero from '@/images/heroConde.webp'
import { getLastProjectsAsd } from '@/services/getLastProjectsAsd'

import Interact from './Hero/Interact.component'

export default async function Hero() {
    const { projects } = await getLastProjectsAsd({ size: 3 })

    return (
        <section
            style={{
                backgroundImage: `url(${condeHero.src})`,
            }}
            className={`mt-[7vh] flex min-h-[calc(80vh)] flex-col justify-between gap-16 overflow-hidden bg-pale-400 bg-cover bg-[center_center] bg-no-repeat pb-[2.5rem] pt-16 md:mt-[4.25rem] md:min-h-[calc(100vh-2vh)] md:bg-[center_top_80%] md:pt-[7.5rem]`}
        >
            <Container>
                <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between">
                    <div className="w-full max-w-[26.25rem]">
                        <h1 className="text-[1.6875rem] font-medium leading-none text-pale-50 md:text-[2.75rem]">
                            Criamos obras visuais e estratégicas para negócios
                            que desejam ser sólidos, lucrativos e memoráveis.
                        </h1>
                    </div>
                </div>
            </Container>

            <div className="flex flex-col gap-5">
                <Container>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-1 md:gap-3">
                                {projects.map((project) => (
                                    <Link
                                        href={`/project/${project.slug}`}
                                        key={project.id}
                                    >
                                        <img
                                            src={project.cover.url}
                                            alt="Imagem de projeto"
                                            className="h-12 w-12 rounded-full object-cover md:h-16 md:w-16"
                                        />
                                    </Link>
                                ))}
                            </div>

                            <Interact />
                        </div>

                        <div className="flex w-full justify-between border-t-[.13rem] border-pale-50 border-opacity-80 pt-4 text-[1.0625rem] text-pale-50">
                            <span>Estúdio Maralto</span>
                            <span>©{new Date().getFullYear()}</span>
                        </div>
                    </div>
                </Container>
                <Marquee autoFill={true} className="flex gap-4 overflow-y-auto">
                    <svg
                        width="2995"
                        className="h-16 md:h-44"
                        viewBox="0 0 2995 167"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22.04 67.5199C22.04 97.6159 42.808 112.576 63.752 112.576C84.872 112.576 105.64 97.6159 105.64 67.5199C105.64 37.4239 84.872 22.4639 63.752 22.4639C42.808 22.4639 22.04 37.4239 22.04 67.5199ZM0.391968 67.5199C0.391968 26.6879 31.016 2.57592 63.752 2.57592C96.488 2.57592 127.288 26.6879 127.288 67.5199C127.288 108.528 96.488 132.64 63.752 132.64C31.016 132.64 0.391968 108.528 0.391968 67.5199Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M158.569 130H138.681V2.57592H158.745V54.8479C162.617 48.1599 172.473 41.9999 185.673 41.9999C211.369 41.9999 225.273 61.5359 225.273 86.7039C225.273 112.576 209.961 132.112 184.969 132.112C172.825 132.112 163.497 126.832 158.569 118.56V130ZM204.681 86.8799C204.681 69.8079 195.177 60.1279 181.625 60.1279C168.601 60.1279 158.569 69.8079 158.569 86.8799C158.569 103.776 168.601 113.984 181.625 113.984C195.001 113.984 204.681 103.776 204.681 86.8799Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M286.26 43.7599V64.5279C283.972 64.1759 281.684 63.9999 279.572 63.9999C263.732 63.9999 256.516 73.1519 256.516 89.1679V130H236.1V44.2879H255.988V58.0159C260.036 48.6879 269.54 43.2319 280.804 43.2319C283.268 43.2319 285.38 43.5839 286.26 43.7599Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M289.395 106.768C289.395 91.4559 300.659 83.0079 315.267 80.8959L337.267 77.5519C342.195 76.8479 343.603 74.3839 343.603 71.3919C343.603 64.1759 338.675 58.3679 327.411 58.3679C316.675 58.3679 310.691 65.2319 309.811 73.8559L291.155 69.6319C292.739 54.8479 306.115 41.6479 327.235 41.6479C353.635 41.6479 363.667 56.6079 363.667 73.6799V116.272C363.667 124.016 364.547 129.12 364.723 130H345.715C345.539 129.472 344.835 125.952 344.835 119.088C340.787 125.6 332.339 132.64 318.435 132.64C300.483 132.64 289.395 120.32 289.395 106.768ZM322.307 116.624C333.747 116.624 343.603 111.168 343.603 94.4479V90.5759L321.251 93.9199C314.915 94.9759 309.811 98.4959 309.811 105.536C309.811 111.344 314.211 116.624 322.307 116.624Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M371.979 106.768L389.755 101.84C390.459 109.584 396.267 116.448 407.179 116.448C415.627 116.448 420.027 111.872 420.027 106.592C420.027 102.016 416.859 98.4959 409.995 97.0879L397.323 94.2719C382.187 90.9279 374.267 81.0719 374.267 69.2799C374.267 54.3199 387.995 41.6479 405.771 41.6479C429.707 41.6479 437.451 57.1359 438.859 65.5839L421.611 70.5119C420.907 65.5839 417.211 57.6639 405.771 57.6639C398.555 57.6639 393.451 62.2399 393.451 67.5199C393.451 72.0959 396.795 75.4399 402.075 76.4959L415.099 79.1359C431.291 82.6559 439.739 92.5119 439.739 105.184C439.739 118.208 429.179 132.64 407.355 132.64C382.539 132.64 373.035 116.448 371.979 106.768Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M563.481 44.2879L529.865 130H509.449L474.601 44.2879H497.129L519.833 105.536L542.009 44.2879H563.481Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M589.949 130H569.709V44.2879H589.949V130ZM566.541 14.1919C566.541 6.79991 572.525 0.815918 579.741 0.815918C587.133 0.815918 593.117 6.79991 593.117 14.1919C593.117 21.5839 587.133 27.3919 579.741 27.3919C572.525 27.3919 566.541 21.5839 566.541 14.1919Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M599.919 106.768L617.695 101.84C618.399 109.584 624.207 116.448 635.119 116.448C643.567 116.448 647.967 111.872 647.967 106.592C647.967 102.016 644.799 98.4959 637.935 97.0879L625.263 94.2719C610.127 90.9279 602.207 81.0719 602.207 69.2799C602.207 54.3199 615.935 41.6479 633.711 41.6479C657.647 41.6479 665.391 57.1359 666.799 65.5839L649.551 70.5119C648.847 65.5839 645.151 57.6639 633.711 57.6639C626.495 57.6639 621.391 62.2399 621.391 67.5199C621.391 72.0959 624.735 75.4399 630.015 76.4959L643.039 79.1359C659.231 82.6559 667.679 92.5119 667.679 105.184C667.679 118.208 657.119 132.64 635.295 132.64C610.479 132.64 600.975 116.448 599.919 106.768Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M734.058 120.496C729.834 128.24 719.802 132.464 709.77 132.464C689.354 132.464 677.386 117.328 677.386 98.3199V44.2879H697.802V94.6239C697.802 105.184 702.73 114.16 715.05 114.16C726.842 114.16 733.002 106.24 733.002 94.9759V44.2879H753.418V114.336C753.418 121.376 753.946 126.832 754.298 130H734.762C734.41 128.064 734.058 124.016 734.058 120.496Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M765.764 106.768C765.764 91.4559 777.028 83.0079 791.636 80.8959L813.636 77.5519C818.564 76.8479 819.972 74.3839 819.972 71.3919C819.972 64.1759 815.044 58.3679 803.78 58.3679C793.044 58.3679 787.06 65.2319 786.18 73.8559L767.524 69.6319C769.108 54.8479 782.484 41.6479 803.604 41.6479C830.004 41.6479 840.036 56.6079 840.036 73.6799V116.272C840.036 124.016 840.916 129.12 841.092 130H822.084C821.908 129.472 821.204 125.952 821.204 119.088C817.156 125.6 808.708 132.64 794.804 132.64C776.852 132.64 765.764 120.32 765.764 106.768ZM798.676 116.624C810.116 116.624 819.972 111.168 819.972 94.4479V90.5759L797.62 93.9199C791.284 94.9759 786.18 98.4959 786.18 105.536C786.18 111.344 790.58 116.624 798.676 116.624Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M876.156 130H855.916V44.2879H876.156V130ZM852.748 14.1919C852.748 6.79991 858.732 0.815918 865.948 0.815918C873.34 0.815918 879.324 6.79991 879.324 14.1919C879.324 21.5839 873.34 27.3919 865.948 27.3919C858.732 27.3919 852.748 21.5839 852.748 14.1919Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M886.126 106.768L903.902 101.84C904.606 109.584 910.414 116.448 921.326 116.448C929.774 116.448 934.174 111.872 934.174 106.592C934.174 102.016 931.006 98.4959 924.142 97.0879L911.47 94.2719C896.334 90.9279 888.414 81.0719 888.414 69.2799C888.414 54.3199 902.142 41.6479 919.918 41.6479C943.854 41.6479 951.598 57.1359 953.006 65.5839L935.758 70.5119C935.054 65.5839 931.358 57.6639 919.918 57.6639C912.702 57.6639 907.598 62.2399 907.598 67.5199C907.598 72.0959 910.942 75.4399 916.222 76.4959L929.246 79.1359C945.438 82.6559 953.886 92.5119 953.886 105.184C953.886 118.208 943.326 132.64 921.502 132.64C896.686 132.64 887.182 116.448 886.126 106.768Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M963.571 117.152C963.571 109.76 969.907 103.776 978.179 103.776C987.507 103.776 994.195 111.168 994.195 122.432C994.195 147.072 977.475 157.456 965.507 159.04V148.656C973.603 146.896 980.995 138.8 981.171 129.648C980.467 130 979.235 130.528 976.947 130.528C969.203 130.528 963.571 125.248 963.571 117.152Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M1059.1 77.7279H1101.16C1100.81 67.6959 1094.12 58.7199 1080.04 58.7199C1067.19 58.7199 1059.8 68.5759 1059.1 77.7279ZM1103.45 100.08L1120.7 105.536C1116.12 120.496 1102.57 132.64 1081.98 132.64C1058.74 132.64 1038.15 115.744 1038.15 86.7039C1038.15 59.5999 1058.22 41.6479 1079.86 41.6479C1106.26 41.6479 1121.75 59.0719 1121.75 86.1759C1121.75 89.5199 1121.4 92.3359 1121.22 92.6879H1058.57C1059.1 105.712 1069.3 115.04 1081.98 115.04C1094.3 115.04 1100.63 108.528 1103.45 100.08Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M1124.89 106.768L1142.67 101.84C1143.37 109.584 1149.18 116.448 1160.09 116.448C1168.54 116.448 1172.94 111.872 1172.94 106.592C1172.94 102.016 1169.77 98.4959 1162.91 97.0879L1150.24 94.2719C1135.1 90.9279 1127.18 81.0719 1127.18 69.2799C1127.18 54.3199 1140.91 41.6479 1158.69 41.6479C1182.62 41.6479 1190.37 57.1359 1191.77 65.5839L1174.53 70.5119C1173.82 65.5839 1170.13 57.6639 1158.69 57.6639C1151.47 57.6639 1146.37 62.2399 1146.37 67.5199C1146.37 72.0959 1149.71 75.4399 1154.99 76.4959L1168.01 79.1359C1184.21 82.6559 1192.65 92.5119 1192.65 105.184C1192.65 118.208 1182.09 132.64 1160.27 132.64C1135.45 132.64 1125.95 116.448 1124.89 106.768Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M1229.97 18.0639V44.2879H1247.75V62.4159H1229.97V102.192C1229.97 109.76 1233.32 112.928 1240.88 112.928C1243.7 112.928 1247.04 112.4 1247.92 112.224V129.12C1246.69 129.648 1242.82 131.056 1235.43 131.056C1219.59 131.056 1209.73 121.552 1209.73 105.536V62.4159H1193.89V44.2879H1198.29C1207.44 44.2879 1211.49 38.4799 1211.49 30.9119V18.0639H1229.97Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M1308.54 43.7599V64.5279C1306.25 64.1759 1303.96 63.9999 1301.85 63.9999C1286.01 63.9999 1278.79 73.1519 1278.79 89.1679V130H1258.38V44.2879H1278.27V58.0159C1282.31 48.6879 1291.82 43.2319 1303.08 43.2319C1305.55 43.2319 1307.66 43.5839 1308.54 43.7599Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M1311.67 106.768C1311.67 91.4559 1322.94 83.0079 1337.55 80.8959L1359.55 77.5519C1364.47 76.8479 1365.88 74.3839 1365.88 71.3919C1365.88 64.1759 1360.95 58.3679 1349.69 58.3679C1338.95 58.3679 1332.97 65.2319 1332.09 73.8559L1313.43 69.6319C1315.02 54.8479 1328.39 41.6479 1349.51 41.6479C1375.91 41.6479 1385.95 56.6079 1385.95 73.6799V116.272C1385.95 124.016 1386.83 129.12 1387 130H1367.99C1367.82 129.472 1367.11 125.952 1367.11 119.088C1363.07 125.6 1354.62 132.64 1340.71 132.64C1322.76 132.64 1311.67 120.32 1311.67 106.768ZM1344.59 116.624C1356.03 116.624 1365.88 111.168 1365.88 94.4479V90.5759L1343.53 93.9199C1337.19 94.9759 1332.09 98.4959 1332.09 105.536C1332.09 111.344 1336.49 116.624 1344.59 116.624Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M1427.35 18.0639V44.2879H1445.13V62.4159H1427.35V102.192C1427.35 109.76 1430.7 112.928 1438.27 112.928C1441.08 112.928 1444.43 112.4 1445.31 112.224V129.12C1444.07 129.648 1440.2 131.056 1432.81 131.056C1416.97 131.056 1407.11 121.552 1407.11 105.536V62.4159H1391.27V44.2879H1395.67C1404.83 44.2879 1408.87 38.4799 1408.87 30.9119V18.0639H1427.35Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M1522.09 7.50392L1499.04 33.5519H1482.32L1497.98 7.50392H1522.09ZM1470.7 77.7279H1512.77C1512.41 67.6959 1505.73 58.7199 1491.65 58.7199C1478.8 58.7199 1471.41 68.5759 1470.7 77.7279ZM1515.05 100.08L1532.3 105.536C1527.73 120.496 1514.17 132.64 1493.58 132.64C1470.35 132.64 1449.76 115.744 1449.76 86.7039C1449.76 59.5999 1469.82 41.6479 1491.47 41.6479C1517.87 41.6479 1533.36 59.0719 1533.36 86.1759C1533.36 89.5199 1533.01 92.3359 1532.83 92.6879H1470.17C1470.7 105.712 1480.91 115.04 1493.58 115.04C1505.9 115.04 1512.24 108.528 1515.05 100.08Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M1537.91 134.752L1556.74 129.824C1558.15 140.384 1566.42 148.304 1578.21 148.304C1594.4 148.304 1602.5 140.032 1602.5 122.608V113.632C1598.8 120.32 1590.18 126.128 1577.68 126.128C1554.8 126.128 1538.08 108.528 1538.08 84.4159C1538.08 61.5359 1554.1 42.7039 1577.68 42.7039C1591.06 42.7039 1599.33 48.1599 1603.03 55.1999V44.2879H1622.74V121.904C1622.74 144.784 1610.95 166.08 1578.74 166.08C1556.04 166.08 1540.2 152 1537.91 134.752ZM1581.03 108.704C1594.05 108.704 1603.03 99.1999 1603.03 84.4159C1603.03 69.8079 1593.7 60.3039 1581.03 60.3039C1568 60.3039 1558.68 69.8079 1558.68 84.4159C1558.68 99.3759 1567.65 108.704 1581.03 108.704Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M1659.15 130H1638.91V44.2879H1659.15V130ZM1635.74 14.1919C1635.74 6.79991 1641.73 0.815918 1648.94 0.815918C1656.33 0.815918 1662.32 6.79991 1662.32 14.1919C1662.32 21.5839 1656.33 27.3919 1648.94 27.3919C1641.73 27.3919 1635.74 21.5839 1635.74 14.1919Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M1714 60.4799C1701.5 60.4799 1690.42 69.8079 1690.42 87.0559C1690.42 104.304 1701.5 113.984 1714.35 113.984C1727.73 113.984 1733.89 104.656 1735.82 98.1439L1753.78 104.656C1749.73 118.032 1736.88 132.64 1714.35 132.64C1689.18 132.64 1670 113.104 1670 87.0559C1670 60.6559 1689.18 41.6479 1713.82 41.6479C1736.88 41.6479 1749.55 56.0799 1753.07 69.8079L1734.77 76.4959C1732.83 68.9279 1727.02 60.4799 1714 60.4799Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M1757.31 106.768C1757.31 91.4559 1768.57 83.0079 1783.18 80.8959L1805.18 77.5519C1810.11 76.8479 1811.52 74.3839 1811.52 71.3919C1811.52 64.1759 1806.59 58.3679 1795.33 58.3679C1784.59 58.3679 1778.61 65.2319 1777.73 73.8559L1759.07 69.6319C1760.65 54.8479 1774.03 41.6479 1795.15 41.6479C1821.55 41.6479 1831.58 56.6079 1831.58 73.6799V116.272C1831.58 124.016 1832.46 129.12 1832.64 130H1813.63C1813.45 129.472 1812.75 125.952 1812.75 119.088C1808.7 125.6 1800.25 132.64 1786.35 132.64C1768.4 132.64 1757.31 120.32 1757.31 106.768ZM1790.22 116.624C1801.66 116.624 1811.52 111.168 1811.52 94.4479V90.5759L1789.17 93.9199C1782.83 94.9759 1777.73 98.4959 1777.73 105.536C1777.73 111.344 1782.13 116.624 1790.22 116.624Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M1839.89 106.768L1857.67 101.84C1858.37 109.584 1864.18 116.448 1875.09 116.448C1883.54 116.448 1887.94 111.872 1887.94 106.592C1887.94 102.016 1884.77 98.4959 1877.91 97.0879L1865.24 94.2719C1850.1 90.9279 1842.18 81.0719 1842.18 69.2799C1842.18 54.3199 1855.91 41.6479 1873.69 41.6479C1897.62 41.6479 1905.37 57.1359 1906.77 65.5839L1889.53 70.5119C1888.82 65.5839 1885.13 57.6639 1873.69 57.6639C1866.47 57.6639 1861.37 62.2399 1861.37 67.5199C1861.37 72.0959 1864.71 75.4399 1869.99 76.4959L1883.01 79.1359C1899.21 82.6559 1907.65 92.5119 1907.65 105.184C1907.65 118.208 1897.09 132.64 1875.27 132.64C1850.45 132.64 1840.95 116.448 1839.89 106.768Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M1968.21 77.7279H2010.28C2009.92 67.6959 2003.24 58.7199 1989.16 58.7199C1976.31 58.7199 1968.92 68.5759 1968.21 77.7279ZM2012.56 100.08L2029.81 105.536C2025.24 120.496 2011.68 132.64 1991.09 132.64C1967.86 132.64 1947.27 115.744 1947.27 86.7039C1947.27 59.5999 1967.33 41.6479 1988.98 41.6479C2015.38 41.6479 2030.87 59.0719 2030.87 86.1759C2030.87 89.5199 2030.52 92.3359 2030.34 92.6879H1967.68C1968.21 105.712 1978.42 115.04 1991.09 115.04C2003.41 115.04 2009.75 108.528 2012.56 100.08Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M2096.67 130H2076.43V44.2879H2095.97V55.1999C2100.9 46.3999 2111.63 41.8239 2121.31 41.8239C2132.58 41.8239 2142.43 46.9279 2147.01 56.9599C2153.7 45.6959 2163.73 41.8239 2174.82 41.8239C2190.31 41.8239 2205.09 51.6799 2205.09 74.3839V130H2185.38V77.7279C2185.38 67.6959 2180.27 60.1279 2168.83 60.1279C2158.1 60.1279 2151.06 68.5759 2151.06 79.1359V130H2130.99V77.7279C2130.99 67.8719 2126.07 60.1279 2114.45 60.1279C2103.54 60.1279 2096.67 68.2239 2096.67 79.1359V130Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M2235.55 77.7279H2277.61C2277.26 67.6959 2270.57 58.7199 2256.49 58.7199C2243.64 58.7199 2236.25 68.5759 2235.55 77.7279ZM2279.9 100.08L2297.15 105.536C2292.57 120.496 2279.02 132.64 2258.43 132.64C2235.19 132.64 2214.6 115.744 2214.6 86.7039C2214.6 59.5999 2234.67 41.6479 2256.31 41.6479C2282.71 41.6479 2298.2 59.0719 2298.2 86.1759C2298.2 89.5199 2297.85 92.3359 2297.67 92.6879H2235.02C2235.55 105.712 2245.75 115.04 2258.43 115.04C2270.75 115.04 2277.08 108.528 2279.9 100.08Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M2329.15 130H2308.91V44.2879H2328.45V55.1999C2333.38 46.3999 2344.11 41.8239 2353.79 41.8239C2365.06 41.8239 2374.91 46.9279 2379.49 56.9599C2386.18 45.6959 2396.21 41.8239 2407.3 41.8239C2422.78 41.8239 2437.57 51.6799 2437.57 74.3839V130H2417.86V77.7279C2417.86 67.6959 2412.75 60.1279 2401.31 60.1279C2390.58 60.1279 2383.54 68.5759 2383.54 79.1359V130H2363.47V77.7279C2363.47 67.8719 2358.54 60.1279 2346.93 60.1279C2336.02 60.1279 2329.15 68.2239 2329.15 79.1359V130Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M2491.43 114.336C2504.1 114.336 2515.37 105.008 2515.37 87.0559C2515.37 69.2799 2504.1 60.1279 2491.43 60.1279C2478.94 60.1279 2467.5 69.2799 2467.5 87.0559C2467.5 104.832 2478.94 114.336 2491.43 114.336ZM2491.43 41.6479C2517.13 41.6479 2535.96 60.8319 2535.96 87.0559C2535.96 113.456 2517.13 132.64 2491.43 132.64C2465.91 132.64 2447.08 113.456 2447.08 87.0559C2447.08 60.8319 2465.91 41.6479 2491.43 41.6479Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M2597.05 43.7599V64.5279C2594.76 64.1759 2592.47 63.9999 2590.36 63.9999C2574.52 63.9999 2567.31 73.1519 2567.31 89.1679V130H2546.89V44.2879H2566.78V58.0159C2570.83 48.6879 2580.33 43.2319 2591.59 43.2319C2594.06 43.2319 2596.17 43.5839 2597.05 43.7599Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M2600.19 106.768C2600.19 91.4559 2611.45 83.0079 2626.06 80.8959L2648.06 77.5519C2652.99 76.8479 2654.39 74.3839 2654.39 71.3919C2654.39 64.1759 2649.47 58.3679 2638.2 58.3679C2627.47 58.3679 2621.48 65.2319 2620.6 73.8559L2601.95 69.6319C2603.53 54.8479 2616.91 41.6479 2638.03 41.6479C2664.43 41.6479 2674.46 56.6079 2674.46 73.6799V116.272C2674.46 124.016 2675.34 129.12 2675.51 130H2656.51C2656.33 129.472 2655.63 125.952 2655.63 119.088C2651.58 125.6 2643.13 132.64 2629.23 132.64C2611.27 132.64 2600.19 120.32 2600.19 106.768ZM2633.1 116.624C2644.54 116.624 2654.39 111.168 2654.39 94.4479V90.5759L2632.04 93.9199C2625.71 94.9759 2620.6 98.4959 2620.6 105.536C2620.6 111.344 2625 116.624 2633.1 116.624ZM2666.54 7.50392L2643.48 33.5519H2626.76L2642.43 7.50392H2666.54Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M2766.92 44.2879L2733.3 130H2712.89L2678.04 44.2879H2700.57L2723.27 105.536L2745.45 44.2879H2766.92Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M2784.82 77.7279H2826.89C2826.54 67.6959 2819.85 58.7199 2805.77 58.7199C2792.92 58.7199 2785.53 68.5759 2784.82 77.7279ZM2829.18 100.08L2846.42 105.536C2841.85 120.496 2828.3 132.64 2807.7 132.64C2784.47 132.64 2763.88 115.744 2763.88 86.7039C2763.88 59.5999 2783.94 41.6479 2805.59 41.6479C2831.99 41.6479 2847.48 59.0719 2847.48 86.1759C2847.48 89.5199 2847.13 92.3359 2846.95 92.6879H2784.3C2784.82 105.712 2795.03 115.04 2807.7 115.04C2820.02 115.04 2826.36 108.528 2829.18 100.08Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M2878.43 130H2858.19V44.2879H2878.43V130ZM2855.02 14.1919C2855.02 6.79991 2861.01 0.815918 2868.22 0.815918C2875.61 0.815918 2881.6 6.79991 2881.6 14.1919C2881.6 21.5839 2875.61 27.3919 2868.22 27.3919C2861.01 27.3919 2855.02 21.5839 2855.02 14.1919Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M2888.4 106.768L2906.18 101.84C2906.88 109.584 2912.69 116.448 2923.6 116.448C2932.05 116.448 2936.45 111.872 2936.45 106.592C2936.45 102.016 2933.28 98.4959 2926.42 97.0879L2913.74 94.2719C2898.61 90.9279 2890.69 81.0719 2890.69 69.2799C2890.69 54.3199 2904.42 41.6479 2922.19 41.6479C2946.13 41.6479 2953.87 57.1359 2955.28 65.5839L2938.03 70.5119C2937.33 65.5839 2933.63 57.6639 2922.19 57.6639C2914.98 57.6639 2909.87 62.2399 2909.87 67.5199C2909.87 72.0959 2913.22 75.4399 2918.5 76.4959L2931.52 79.1359C2947.71 82.6559 2956.16 92.5119 2956.16 105.184C2956.16 118.208 2945.6 132.64 2923.78 132.64C2898.96 132.64 2889.46 116.448 2888.4 106.768Z"
                            fill="#F4F3EB"
                        />
                        <path
                            d="M2966.2 116.8C2966.2 108.88 2972.53 102.368 2980.45 102.368C2988.37 102.368 2994.89 108.88 2994.89 116.8C2994.89 124.72 2988.37 131.056 2980.45 131.056C2972.53 131.056 2966.2 124.72 2966.2 116.8Z"
                            fill="#F4F3EB"
                        />
                    </svg>
                </Marquee>
            </div>
        </section>
    )
}
