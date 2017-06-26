const purchase = require('./views/purchase.vue');
/*work */
//const work = function(){require(['./views/work.vue'],resolve)};
/*const reservation=require('./views/work/reservation.vue');
const serviceBilling=require('./views/work/serviceBilling.vue');
const serviceRecord=require('./views/work/serviceRecord.vue');
const businessDaily=require('./views/work/businessDaily.vue');*/
/*const reservation=require('./views/work/reservation.vue');

const client = require('./views/client.vue');

const warehouse = require('./views/warehouse.vue');

const employee = require('./views/employee.vue');

const financial = require('./views/financial.vue');

const forum = require('./views/forum.vue');

const setup = require('./views/setup.vue');*/

/**{path:'serviceBilling',component:serviceBilling},
        {path:'serviceRecord',component:serviceRecord},
        {path:'businessDaily',component:businessDaily} 
        children:[
        {path:'reservation',component:reservation}
        
    ]
        */

var purchasePath={path:'/purchase',component:purchase};

var workPath={
    path:'/work',
    component: resolve => require(['./views/work.vue'],resolve)
    
};

var clientPath={path:'/client',component:resolve=>require(['./views/client.vue'],resolve)};

var warehousePath={path:'/warehouse',component:resolve=>require(['./views/warehouse.vue'],resolve)};

var employeePath={path:'/employee',component:resolve=>require(['./views/employee.vue'],resolve)};

var financialPath={path:'/financial',component:resolve=>require(['./views/financial.vue'],resolve)};

var forumPath={path:'/forum',component:resolve=>require(['./views/forum.vue'],resolve)};

var setUpPath={path:'/setUp',component:resolve=>require(['./views/setUp.vue'],resolve)};

/* purchasePath:{path:'/purchase',component:purchase},

  workPath:{path:'/work',component:work},

  clientPath:{path:'/client',component:client},

  warehousePath:{path:'/warehouse',component:warehouse},

  employeePath:{path:'/employee',component:employee},

  financialPath:{path:'/financial',component:financial},

  forumPath:{path:'/forum',component:forum},

  setUpPath:{path:'/setUp',component:setup},
  
  ,
        {path:'/reservation',component:reservation}
  */

module.exports = {

    
    routes: [purchasePath,workPath,clientPath,warehousePath,employeePath,financialPath,forumPath,setUpPath,
        {
            path: '/about',
            component: require('./views/about.vue')
        }
    ]
}