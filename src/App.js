import React,{ useEffect } from 'react';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';

const App = () => {
    const activeMenu= true;
  return (
    <div>
        <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
            <div className='fixed right-4 bottom-4 z-50'>
                <TooltipComponent content={'Settings'} position='Top'>
                    <button type='button' className='text-3xl p-3 hover:shadow-md hover:bg-light-gray rounded-full text-white' style={{background: 'blue'}}><FiSettings/></button>
                </TooltipComponent>
            </div>
            {activeMenu ? (
                <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>Sidebar</div>
            ):(
                <div className='w-0 fixed  dark:bg-secondary-dark-bg bg-white'>Sidebar w-0 </div>
            )}
            <div className={
                `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? ' md:ml-72 ':'flex-2'}`
                }>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>Navbar</div>
                </div>
                <div>
                    <Routes>
                        {/* Dashboard */}
                         <Route path='/' element="Ecommerce"/>
                         <Route path='/ecommerce' element="Ecommerce"/>
                         {/* Pages */}
                         <Route path='/orders' element="Orders"/>
                         <Route path='/employees' element="Employees"/>
                         <Route path='/customers' element="Customers"/>
                         {/* Apps */}
                         <Route path='/kanban' element="Kanban"/>
                         <Route path='/editor' element="Editor"/>
                         <Route path='/calender' element="Calender"/>
                         <Route path='/color-picker' element="colorPicker"/>
                         {/* Charts */}
                         <Route path='/line' element="Line"/>
                         <Route path='/area' element="Area"/>
                         <Route path='/bar' element="bar"/>
                         <Route path='/pie' element="pie"/>
                         <Route path='/financial' element="Financial"/>
                         <Route path='/color-mapping' element="ColorMapping"/>
                         <Route path='/pyramid' element="pyramid"/>
                         <Route path='/stacked' element="stacked"/>
                    </Routes>
                </div>
        </div>
        </BrowserRouter>
    </div>
  )
}

export default App