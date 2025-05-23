import { TreeViewBaseItem } from '@mui/x-tree-view/models'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import ArticleIcon from '@mui/icons-material/Article'
import FolderRounded from '@mui/icons-material/FolderRounded'
import { ExtendedTreeItemProps } from '@/components/sideMenu/FilePageTreeView'

// 所有侧边栏上半部分页面树形节点的相关定义
export const mainListItems: TreeViewBaseItem<ExtendedTreeItemProps>[] = [
    {
        id: '1',
        label: '主页',
        href: '/dashboard/home',
        icon: HomeRoundedIcon,
    },
    {
        id: '2',
        label: '相关方管理',
        href: '/dashboard/interested_party',
        icon: FolderRounded,
        children: [
            {
                id: '2.1',
                label: '相关方情况分析',
                href: '/dashboard/interested_party/analysis',
                icon: ArticleIcon,
            },
            {
                id: '2.2',
                label: '相关方进入详情',
                href: '/dashboard/interested_party/details',
                icon: ArticleIcon,
            },
        ],
    },
    {
        id: '3',
        label: '综合管理',
        href: '/dashboard/general',
        icon: FolderRounded,
        children: [
            {
                id: '3.1',
                label: '人员效能分析',
                icon: ArticleIcon,
                href: '/dashboard/general/personnel_effectiveness',
            },
            {
                id: '3.2',
                label: '制造差旅分析',
                icon: ArticleIcon,
                href: '/dashboard/general/personnel_traveler',
            },
            {
                id: '3.3',
                label: '工作量预测',
                icon: ArticleIcon,
                href: '/dashboard/general/personnel_workloads',
            },
            {
                id: '3.4',
                label: '人员考勤分析',
                icon: ArticleIcon,
                href: '/dashboard/general/attendance',
            },
        ],
    },
    {
        id: '4',
        label: '异常管理',
        href: '/dashboard/error',
        icon: FolderRounded,
        children: [
            {
                id: '4.1',
                label: '生产异常响应分析',
                icon: ArticleIcon,
                href: '/dashboard/error/responsive',
            },
            {
                id: '4.2',
                label: '校线异常分析',
                icon: ArticleIcon,
                href: '/dashboard/error/calibration_line',
            },
            {
                id: '4.3',
                label: '异常月报生成',
                icon: ArticleIcon,
                href: '/dashboard/error/report_generation',
            },
        ],
    },
    {
        id: '5',
        label: '改善管理',
        href: '/dashboard/ameliorate',
        icon: FolderRounded,
        children: [
            {
                id: '5.1',
                label: '全员型改善提交分析',
                icon: ArticleIcon,
                href: '/dashboard/ameliorate/submission_of_analyses',
            },
            {
                id: '5.2',
                label: '全员型改善审核分析',
                icon: ArticleIcon,
                href: '/dashboard/ameliorate/audit_analysis',
            },
            {
                id: '5.3',
                label: '改善明细导出',
                icon: ArticleIcon,
                href: '/dashboard/ameliorate/export',
            },
        ],
    },
    {
        id: '6',
        label: '业联管理',
        href: '/dashboard/business_connection',
        icon: FolderRounded,
        children: [
            {
                id: '6.1',
                label: '设计变更转化统计',
                icon: ArticleIcon,
                href: '/dashboard/business_connection/convert',
            },
            {
                id: '6.2',
                label: '设计变更成本统计',
                icon: ArticleIcon,
                href: '/dashboard/business_connection/costs',
            },
        ],
    },
    {
        id: '7',
        label: '计划管理',
        href: '/dashboard/plan',
        icon: FolderRounded,
        children: [
            {
                id: '7.1',
                label: '年月计划管理',
                icon: ArticleIcon,
                href: '/dashboard/plan/plan_management',
            },
            {
                id: '7.2',
                label: '车间工作量评估',
                icon: ArticleIcon,
                href: '/dashboard/plan/workshop_workloads',
            },
            {
                id: '7.3',
                label: 'APS辅助排程',
                icon: ArticleIcon,
                href: '/dashboard/plan/aps_assisted_scheduling',
            },
        ],
    },
    {
        id:'8',
        label: 'BOM管理',
        href: '/dashboard/bom',
        icon: FolderRounded,
        children: [
            {
                id: '8.1',
                label: '跨系统BOM一致性检验',
                icon: ArticleIcon,
                href: '/dashboard/bom/consistency_check',
            },
            {
                id: '8.2',
                label: 'BOM定额展示',
                icon: ArticleIcon,
                href: '/dashboard/bom/quota_display',
            },
        ]
    },
    {
        id: '9',
        label: '城轨通讯录',
        href: '/dashboard/directory',
        icon: ArticleIcon,
    },
]

// 所有侧边栏下半部分设置的相关定义
export const secondaryListItems = [
    {
        label: '设置',
        icon: <SettingsRoundedIcon />,
    },
    {
        label: '关于',
        icon: <InfoRoundedIcon />,
    },
]
