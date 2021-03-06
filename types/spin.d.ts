// Type definitions for beegridtable 1.0.0
// Project: https://github.com/jiahengaa/BeeGridTable
// Definitions by: liujiaheng
// Definitions: https://github.com/jiahengaa/BeeGridTable.git
import Vue, { VNode } from "vue";

export declare class Spin extends Vue {
    /**
     * Spin尺寸，可选值为large和small或者不设置
     */
    size?: "large" | "small";
    /**
     * 是否固定，需要父级有relative或absolute
     * @default false
     */
    fix?: boolean;
    /**
     * slot插槽对象
     */
    $slots: {
        /**
         * 自定义 Spin 的内容，设置slot后，默认的样式不生效
         */
        "": VNode[];
    };
}

declare module "vue/types/vue" {
    interface Vue {
        /**
         *
         */
        $Spin: Spin;
    }
}
