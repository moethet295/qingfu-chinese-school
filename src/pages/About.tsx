function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">

      <div className="mx-auto max-w-5xl">

        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-4xl font-bold text-red-700">
            庆福华文学苑
          </h1>

          <p className="text-lg text-gray-500">
            Kheng Hock Chinese Language Center
          </p>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-yellow-400"></div>
        </div>


        {/* Introduction */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            学苑简介
          </h2>

          <p className="leading-8 text-gray-600">
            庆福华文学苑（Kheng Hock Chinese Language Center）位于缅甸仰光，
            是缅南地区华文补习班形式的先驱，也是1967年后以寺庙形式创办的最早、
            唯一的华文补习机构。
          </p>
        </div>


        {/* Basic Information */}
        <h2 className="mb-5 text-2xl font-bold text-gray-800">
          基本概况
        </h2>

        <div className="grid gap-5 md:grid-cols-3">

          {/* Background */}
          <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-3 text-lg font-bold text-red-600">
              创办背景
            </h3>

            <p className="leading-7 text-gray-600">
              由仰光历史悠久的庆福宫创办，在风雨中经历了几十年的坚守与发展。
            </p>
          </div>


          {/* Purpose */}
          <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-3 text-lg font-bold text-red-600">
              办学宗旨
            </h3>

            <p className="leading-7 text-gray-600">
              致力于在当地推广华文教育，为华裔子弟及当地民众提供学习中文和了解中华文化的平台。
            </p>
          </div>


          {/* Activities */}
          <div className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-3 text-lg font-bold text-red-600">
              主要活动
            </h3>

            <p className="leading-7 text-gray-600">
              长期开展中文教学，并定期举办公开课以及“六一”儿童节等丰富多彩的文化庆祝活动。
            </p>
          </div>

        </div>


        {/* Bottom Message */}
        <div className="mt-10 rounded-xl bg-yellow-100 p-6 text-center">
          <p className="font-medium text-gray-700">
            欢迎了解庆福华文学苑的课程设置、报名方式及更多信息。
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;