<template>
  <div class="app-container">
    <el-row :gutter="30">
      <el-col :span="4" :xs="24">
        <div class="head-container">
          <el-input
            v-model="merchantName"
            placeholder="请输入商户名称"
            clearable
            size="small"
            prefix-icon="el-icon-search"
            style="margin-bottom: 20px"
          />
        </div>
        <div class="head-container">
          <el-tree
            :data="merchantTreeOptions"
            :props="defaultProps"
            :expand-on-click-node="false"
            :filter-node-method="filterNode"
            ref="tree"
            default-expand-all
            @node-click="handleNodeClick"
          />
        </div>
      </el-col>
    <el-col :span="20" :xs="24">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="auto">
      <el-form-item label="终端品牌" prop="posType">
        <el-select v-model="queryParams.posType" placeholder="请选择终端品牌" clearable size="small">
          <el-option
            v-for="dict in posTypeOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="终端名称" prop="posName">
        <el-input
          v-model="queryParams.posName"
          placeholder="请输入终端名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="SN号" prop="posCode">
        <el-input
          v-model="queryParams.posCode"
          placeholder="请输入终端SN系列号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>

<!--      <el-form-item label="终端设备激活码" prop="posActivateCode">-->
<!--        <el-input-->
<!--          v-model="queryParams.posActivateCode"-->
<!--          placeholder="请输入终端设备激活码"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />
      </el-form-item> -->
      <el-form-item label="终端状态" prop="posActivateStatus">
        <el-select v-model="queryParams.posActivateStatus" placeholder="请选择终端状态" clearable size="small">
          <el-option
            v-for="dict in posActivateStatusOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
<!--      <el-form-item label="激活时间" prop="posBindTime">-->
<!--        <el-date-picker clearable size="small"-->
<!--          v-model="queryParams.posBindTime"-->
<!--          type="date"-->
<!--          value-format="yyyy-MM-dd"-->
<!--          placeholder="选择激活时间">-->
<!--        </el-date-picker>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="终端活动" prop="posActivity">-->
<!--        <el-input-->
<!--          v-model="queryParams.posActivity"-->
<!--          placeholder="请输入终端活动"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="终端压金" prop="posDeposit">-->
<!--        <el-input-->
<!--          v-model="queryParams.posDeposit"-->
<!--          placeholder="请输入终端压金"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="终端返现" prop="posCashback">-->
<!--        <el-input-->
<!--          v-model="queryParams.posCashback"-->
<!--          placeholder="请输入终端返现"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="刷返够模式" prop="posModel">-->
<!--        <el-input-->
<!--          v-model="queryParams.posModel"-->
<!--          placeholder="请输入刷返够模式"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="终端机归属商户" prop="merchId">-->
<!--        <el-input-->
<!--          v-model="queryParams.merchId"-->
<!--          placeholder="请输入终端机归属商户"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="终端机归属商户" prop="var1">-->
<!--        <el-input-->
<!--          v-model="queryParams.var1"-->
<!--          placeholder="请输入终端机归属商户"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="终端机归属商户" prop="var2">-->
<!--        <el-input-->
<!--          v-model="queryParams.var2"-->
<!--          placeholder="请输入终端机归属商户"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="终端机归属商户" prop="var3">-->
<!--        <el-input-->
<!--          v-model="queryParams.var3"-->
<!--          placeholder="请输入终端机归属商户"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="终端机归属商户" prop="var4">-->
<!--        <el-input-->
<!--          v-model="queryParams.var4"-->
<!--          placeholder="请输入终端机归属商户"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="终端机归属商户" prop="var5">-->
<!--        <el-input-->
<!--          v-model="queryParams.var5"-->
<!--          placeholder="请输入终端机归属商户"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
		  plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['terminal:posmachine:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
		  plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['terminal:posmachine:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="multiple"
          @click="handleAllocate"
          v-hasPermi="['terminal:posmachine:allocate']"
        >划拔</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="multiple"
          @click="handleAdjust"
          v-hasPermi="['terminal:posmachine:adjust']"
        >回调</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
		  plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['terminal:posmachine:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
		  plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['terminal:posmachine:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="posmachineList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="主键" align="center" prop="posId" v-if="false"/>
      <el-table-column label="设备类型" align="center" prop="posType" :formatter="posTypeFormat" />
      <el-table-column label="产品名称" align="center" prop="posName"  width="120"/>
      <el-table-column label="SN号" align="center" prop="posCode" width="165"/>
      <el-table-column label="归属伙伴" align="center" prop="merchId"  width="165" :formatter="merchantFormat"/>
      <el-table-column label="伙伴编号" align="center" prop="var2" width="160"/>
      <el-table-column label="终端状态" align="center" prop="posActivateStatus" :formatter="posActivateStatusFormat"/>
      <el-table-column label="设备绑定时间" align="center" prop="posActivateCode"  width="160"/>
      <el-table-column label="设备激活时间" align="center" prop="posBindTime" width="160"/>
      <el-table-column label="终端活动" align="center" prop="posActivity" width="180" :formatter="posActivityTypeFormat"/>
      <el-table-column label="终端压金" align="center" prop="posDeposit" />
      <el-table-column label="终端返现" align="center" prop="posCashback" />
      <el-table-column label="刷返够模式" align="center" prop="posModel"  width="120" :formatter="posCashoutModelFormat"/>

<!--      <el-table-column label="机具类型" align="center" prop="var1" width="100" :formatter="posMachineTypeFormat" />-->

<!--      <el-table-column label="终端机归属商户" align="center" prop="var3" />-->
<!--      <el-table-column label="终端机归属商户" align="center" prop="var4" />-->
<!--      <el-table-column label="终端机归属商户" align="center" prop="var5" />-->
      <el-table-column label="操作" align="center"  width="120" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['terminal:posmachine:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['terminal:posmachine:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />
      </el-col>
    </el-row>
    <!-- 添加或修改终端设备信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="600px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="auto">
        <el-form-item label="终端名称" prop="posName" v-if="showOthers">
          <el-input v-model="form.posName" placeholder="请输入终端名称" />
        </el-form-item>
        <el-form-item label="SN号" prop="posCode"  v-if="showOthers">
          <el-input v-model="form.posCode" placeholder="请输入SN号" />
        </el-form-item>
        <el-form-item label="品牌类型" prop="posType"  v-if="showOthers">
          <el-select v-model="form.posType" placeholder="请选择品牌类型">
            <el-option
              v-for="dict in posTypeOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
<!--        <el-form-item label="激活码" prop="posActivateCode">-->
<!--          <el-input v-model="form.posActivateCode" disabled />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="终端状态" prop="posActivateStatus">-->
<!--          <el-select v-model="form.posActivateStatus" disabled placeholder="请选择终端状态" clearable size="small">-->
<!--            <el-option-->
<!--              v-for="dict in posActivateStatusOptions"-->
<!--              :key="dict.dictValue"-->
<!--              :label="dict.dictLabel"-->
<!--              :value="dict.dictValue"-->
<!--            />-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="激活时间" prop="posBindTime" >-->
<!--          <el-input v-model="form.posBindTime" disabled />-->
<!--        </el-form-item>-->
        <el-form-item label="终端活动" prop="posActivity"  v-if="showOthers">
          <el-select v-model="form.posActivity" placeholder="请选择终端活动" clearable size="small">
            <el-option
              v-for="dict in posActivityTypeOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="终端压金" prop="posDeposit"  v-if="showOthers">
          <el-input v-model="form.posDeposit" placeholder="请输入终端压金" />
        </el-form-item>
        <el-form-item label="终端返现" prop="posCashback"  v-if="showOthers">
          <el-input v-model="form.posCashback" placeholder="请输入终端返现" />
        </el-form-item>
        <el-form-item label="刷返够模式" prop="posModel"  v-if="showOthers">
          <el-select v-model="form.posModel" placeholder="请选择刷返够模式" clearable size="small">
            <el-option
              v-for="dict in posCashoutModelOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="归属商户" prop="merchId" v-if="showMerchant">
          <el-select v-model="form.merchId" placeholder="请选择归属商户" clearable size="small">
            <el-option
              v-for="dict in merchantOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="商户编号" prop="var2"  v-if="false">
          <el-input v-model="form.var2" placeholder="请输入商户编号" />
        </el-form-item>
        <el-form-item label="机具类型" prop="var1" v-if="showOthers">
          <el-select v-model="form.var1" placeholder="请选择机具类型" clearable size="small">
            <el-option
              v-for="dict in posMachineTypeOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            />
          </el-select>
        </el-form-item>

<!--        <el-form-item label="终端机归属商户" prop="var3">-->
<!--          <el-input v-model="form.var3" placeholder="请输入终端机归属商户" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="终端机归属商户" prop="var4">-->
<!--          <el-input v-model="form.var4" placeholder="请输入终端机归属商户" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="终端机归属商户" prop="var5">-->
<!--          <el-input v-model="form.var5" placeholder="请输入终端机归属商户" />-->
<!--        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { adjustPosMachine,allocatePosMachine,listPosmachine, getPosmachine, delPosmachine, addPosmachine, updatePosmachine, exportPosmachine } from "@/api/terminal/posmachine";
import { treeselect,getChildMerchantDict} from "@/api/merchant/merchant";
import TreeSelect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  name: "Posmachine",
  components: { TreeSelect },
  data() {
    return {
      showMerchant: false,
      showOthers: true,
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 终端设备信息表格数据
      posmachineList: [],
      merchantName: undefined,
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 终端类型字典
      posTypeOptions: [],
      posActivateStatusOptions: [],
      merchantTreeOptions: [],
      merchantOptions: [],
      posCashoutModelOptions:[],
      posActivityTypeOptions:[],
      posMachineTypeOptions:[],
      merchants: [],
      defaultProps: {
        children: "children",
        label: "label"
      },
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        posName: undefined,
        posCode: undefined,
        posType: undefined,
        posActivateCode: undefined,
        posActivateStatus: '0',
        posBindTime: undefined,
        posActivity: undefined,
        posDeposit: undefined,
        posCashback: undefined,
        posModel: undefined,
        merchId: undefined,
        var1: undefined,
        var2: undefined,
        var3: undefined,
        var4: undefined,
        var5: undefined
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        posName: [
          { required: true, message: "终端名称不能为空", trigger: "blur" }
        ],
        posCode: [
          { required: true, message: "SN号不能为空", trigger: "blur" }
        ],
        posType: [
          { required: true, message: "请选择终端类型", trigger: "blur" }
        ],
        merchId: [
          { required: true, message: "请选择划拔商户", trigger: "blur" }
        ],
      }
    };
  },
  watch: {
    // 根据名称筛选部门树
    merchantName(val) {
      this.$refs.tree.filter(val);
    }
  },
  created() {
    this.getList();
    this.getTreeSelect();
    this.getDicts("pos_type").then(response => {
      this.posTypeOptions = response.data;
    });
    this.getDicts("pos_activate_status").then(response => {
      this.posActivateStatusOptions = response.data;
    })
    this.getDicts("pos_activity_type").then(response => {
      this.posActivityTypeOptions = response.data;
    })
    this.getDicts("pos_cashout_model").then(response => {
      this.posCashoutModelOptions = response.data;
    })
    this.getDicts("pos_machine_type").then(response => {
      this.posMachineTypeOptions = response.data;
    })
    getChildMerchantDict().then(response => {
      this.merchantOptions = response.data;
    })
  },
  methods: {
    /** 查询终端设备信息列表 */
    getList() {
      this.loading = true;
      listPosmachine(this.queryParams).then(response => {
        this.posmachineList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    getTreeSelect(){
      treeselect().then(response => {
        this.merchants = response.data;
        this.merchantTreeOptions =this.handleTree( response.data, "merchId");
      })
    },

    // 筛选节点
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    // 终端类型字典翻译
    posTypeFormat(row, column) {
      return this.selectDictLabel(this.posTypeOptions, row.posType);
    },
    merchantFormat(row,column){
      return this.selectMerchantName(this.merchants,row.merchId);
    },
    selectMerchantName(datas, value) {
      var actions = [];
      Object.keys(datas).some((key) => {
        if (datas[key].merchId ==  value) {
          actions.push(datas[key].label);
          return true;
        }
      })
      return actions.join('');
    },
    selectMerchantCode(datas, value) {
      var actions = [];
      Object.keys(datas).some((key) => {
        if (datas[key].merchId ==  value) {
          actions.push(datas[key].merchCode);
          return true;
        }
      })
      return actions.join('');
    },
    posActivateStatusFormat(row,colunm){
      return this.selectDictLabel(this.posActivateStatusOptions, row.posActivateStatus);
    },
    posActivityTypeFormat(row,colunm){
      return this.selectDictLabel(this.posActivityTypeOptions, row.posActivity);
    },
    posCashoutModelFormat(row,colunm){
      return this.selectDictLabel(this.posCashoutModelOptions, row.posModel);
    },
    posMachineTypeFormat(row,colunm){
      return this.selectDictLabel(this.posMachineTypeOptions, row.var1);
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        posId: undefined,
        posName: undefined,
        posCode: undefined,
        posType: undefined,
        posActivateCode: undefined,
        posActivateStatus: "0",
        posBindTime: undefined,
        posActivity: undefined,
        posDeposit: undefined,
        posCashback: undefined,
        posModel: undefined,
        merchId: undefined,
        createBy: undefined,
        createTime: undefined,
        updateBy: undefined,
        updateTime: undefined,
        var1: undefined,
        var2: undefined,
        var3: undefined,
        var4: undefined,
        var5: undefined
      };
      this.resetForm("form");
    },
    handleNodeClick(data){
       this.queryParams.merchId = data.merchId;
       this.getList();
    },
    handleAllocate(){
      //仅能划拔本级未激活设备给下级
      this.showMerchant = true;
      this.showOthers = false
      this.reset();
      this.open = true;
      this.title = "划拔终端设备";
      // this.getChildMerchantDict();
    },
    handleAdjust(){
       //仅能回调直接下级且未激活设备到本级
        this.loading=true;
        const posIds = this.ids;
        const data ={'posIds':posIds};
        adjustPosMachine(data).then(response => {
          this.loading = false;
          this.msgSuccess(response.msg);
          this.getList();
        });
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.queryParams.merchId = undefined;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.posId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.form.merchId=1;
      this.open = true;
      this.title = "添加终端设备信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      this.showOthers = true;
      this.showMerchant = false;
      const posId = row.posId || this.ids
      getPosmachine(posId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改终端设备信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if(this.showMerchant){
            let posIds = this.ids;
            let merchId = this.form.merchId;
            let data = {'posIds':posIds,'merchId':merchId};
            allocatePosMachine(data).then(response => {
              this.msgSuccess(response.msg);
              this.open = false;
              this.getList();
            });
          }
          if(this.showOthers){
            if (this.form.posId != null) {
              updatePosmachine(this.form).then(response => {
                this.msgSuccess("修改成功");
                this.open = false;
                this.getList();
              });
            } else {
              addPosmachine(this.form).then(response => {
                this.msgSuccess("新增成功");
                this.open = false;
                this.getList();
              });
            }
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const posIds = row.posId || this.ids;
      this.$confirm('是否确认删除终端设备信息编号为"' + posIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delPosmachine(posIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有终端设备信息数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportPosmachine(queryParams);
        }).then(response => {
          this.download(response.msg);
        })
    }
  }
};
</script>
