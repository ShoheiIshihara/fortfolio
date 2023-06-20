import Image from 'next/image';

export default function Resume() {
  return (
    <>
        <div id='resume' className='mt-[300px]'>
          <h1 className='text-center justify-center items-center text-4xl font-bold text-shadow-md'>
              <p className='text-[80px] md:text-[200px] text-center  font-bold text-gray-200 text-shadow-none md:text-right '>RESUME</p>
              <span className=' text-4xl tracking-widest'>経歴</span>
          </h1>
           <div id='about' className='w-full h-full my-24  whitespace-normal'>
                <div className='mx-6'>
                    <div className='justify-center mt-8 flex '>
                        <ul className="steps steps-vertical w- hidden md:block flex-initial w-40 ">
                            <li data-content="" className="step "><br/></li>
                            <li data-content="" className="step "></li>
                            <li data-content="" className="step "></li>
                            <li data-content="" className="step "></li>
                            <li data-content="" className="step"></li>
                            <li data-content="" className="step"></li>
                        </ul>
                        <div className='leading-8 text-sm flex-initial w-128 '>
                            <div className='mt-[20px]'>
                                <p className=''>2008年 - 株式会社NTTネオメイト 入社</p>
                            </div>
                            <div className='mt-[20px]'>
                              <p className='ml-4'>所属 - 福岡設備部　企画担当</p>
                              <p className='ml-4'>【業務内容】</p>
                              <p className='ml-8'>
                                <ul className='list-disc list-inside'>
                                  <li>設備投資の年間事業計画策定及び実行管理</li>
                                  <li>KPI改善における部署内業務改善</li>
                                  <li>新規設備投資企画立案</li>
                                </ul>
                              </p>
                              <p className='ml-4'>【成果】</p>
                              <p className='ml-8'>
                                <ul className='list-disc list-inside'>
                                  <li>KPI指標30%改善（支店表彰）</li>
                                  <li>フレッツ光カバー率の向上（70%→95%）</li>
                                </ul>
                              </p>
                            </div>
                            <div className=' mt-[20px]' >   
                              <p className=''>2013年 - 株式会社NTTフィールドテクノ転籍</p>
                              <p className='ml-4'>所属 - 九州支店　エンジニアリングセンタ</p>
                              <p className='ml-4'>【業務内容】</p>
                              <p className='ml-8'>
                                <ul className='list-disc list-inside'>
                                  <li>部門内業務改善プロジェクト立ち上げ業務（RPA,VBA）</li>
                                  <li>工事管理：年間10億円</li>
                                  <li>九州内テックリード</li>
                                  <li>品質管理</li>
                                </ul>
                              </p>
                              <p className='ml-4'>【成果】</p>
                              <p className='ml-8'>
                                  <ul  className='list-disc list-inside'>
                                    <li>部門内30％稼働削減（▲30人/年）</li>
                                    <li>九州支店長表彰</li>
                                    <li>施工管理スキル　全国大会1位</li>
                                  </ul>
                              </p>
                            </div>
                            <div className=' mt-[20px]' >   
                              <p className=''>2018年 - 西日本電信電話株式会社　出向</p>
                              <p className='ml-4'>所属 - 設備本部　エンジニアリング企画</p>
                              <p className='ml-4'>【業務内容】</p>
                              <p className='ml-8'>
                                <ul className='list-disc list-inside'>
                                  <li>新規業務システム導入（SAP）に向けた既存業務の整理及びシステム要件整理</li>
                                  <li>有スキル者人材確保に向けた育成施策立案及び実施</li>
                                  <li>DX化に向けた工事図書類の電子化の取り組み</li>
                                  <li>拠点集約に向けた業務プロセス標準化の取り組み</li>
                                  <li>高度無線整備事業完遂に向けた取り組み</li>
                                </ul>
                              </p>
                              <p className='ml-4'>【成果】</p>
                              <p className='ml-8'>
                                  <ul  className='list-disc list-inside'>
                                    <li>協力会社へのOJTスキーム整理及び契約締結、OJT実施</li>
                                    <li>社長表彰（高度無線事業達成）</li>
                                    <li>請負工事における工事図書類の電子化完了（300帳票）</li>
                                  </ul>
                              </p>
                            </div>
                            <div className=' mt-[20px]' >   
                              <p className=''>2021年11月 - 退社</p>
                            </div>
                            <div className=' mt-[20px]' >    
                              <p className=''>2022年6月 - 12月 求職者支援訓練校　受講</p>
                              <p className='ml-4'> 学科 - フロントエンドエンジニア養成科</p>
                              <p className='ml-4'>【成果】</p>
                              <p className='ml-8'>
                                  <ul  className='list-disc list-inside'>
                                    <li>プログラミングスキル基礎習得</li>
                                    <li>HTML CSS javascript php SQL</li>
                                    <li>チームによる共同作業</li>
                                  </ul>
                              </p>
                            </div>
                            <div className=' mt-[20px]'>
                              <p className=''>2023年 - 現在</p>
                              <p className='ml-8'>
                                  <ul  className='list-disc list-inside'>
                                    <li>WEBページ制作</li>
                                    <li>WEBアプリケーション制作</li>
                                    <li>WEBマーケティング提案（MEO、SNS）</li>
                                  </ul>
                              </p>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
        </div>
    </>
  )
}


