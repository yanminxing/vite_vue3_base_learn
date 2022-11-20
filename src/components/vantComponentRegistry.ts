/**
 *  vant组件的注册
 * */

import {
	// 基础组件
	Button,
} from  'vant';

const vanComps = [
	// 基础组件
	Button,
]


export const useVanComps = function (app: any) {
	vanComps.forEach((item) => {
		app.use(item)
	})
}