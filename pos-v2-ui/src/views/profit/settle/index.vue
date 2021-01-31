<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="auto">

      <el-form-item label="商户编号" prop="merchCode">
        <el-input
          v-model="queryParams.merchCode"
          placeholder="请输入商户编号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商户名称" prop="merchName">
        <el-input
          v-model="queryParams.merchName"
          placeholder="请输入商户名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
<!--      <el-form-item label="月交易额" prop="monthAmount">-->
<!--        <el-input-->
<!--          v-model="queryParams.monthAmount"-->
<!--          placeholder="请输入月交易额"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="交易分润" prop="transProfit">-->
<!--        <el-input-->
<!--          v-model="queryParams.transProfit"-->
<!--          placeholder="请输入交易分润"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="管理津贴" prop="manageAllowance">-->
<!--        <el-input-->
<!--          v-model="queryParams.manageAllowance"-->
<!--          placeholder="请输入管理津贴"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="钻石奖金" prop="diamondReward">-->
<!--        <el-input-->
<!--          v-model="queryParams.diamondReward"-->
<!--          placeholder="请输入钻石奖金"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="皇冠奖" prop="crownReward">-->
<!--        <el-input-->
<!--          v-model="queryParams.crownReward"-->
<!--          placeholder="请输入皇冠奖"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="分红奖金" prop="bonusReward">-->
<!--        <el-input-->
<!--          v-model="queryParams.bonusReward"-->
<!--          placeholder="请输入分红奖金"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="奖金分红总额" prop="rewardAmount">-->
<!--        <el-input-->
<!--          v-model="queryParams.rewardAmount"-->
<!--          placeholder="请输入奖金分红总额"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
      <el-form-item label="结算年份" prop="caculateYear">
        <el-input
          v-model="queryParams.caculateYear"
          placeholder="请输入结算年份"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="结算月份" prop="caculateMonth">
        <el-select v-model="queryParams.caculateMonth" placeholder="请选择结算月份">
          <el-option
            v-for="dict in settleMonthOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          ></el-option>
        </el-select>
      </el-form-item>
<!--      <el-form-item label="结算日" prop="caculateDay">-->
<!--        <el-input-->
<!--          v-model="queryParams.caculateDay"-->
<!--          placeholder="请输入结算日"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="分润计算日期时间" prop="caculateDate">-->
<!--        <el-input-->
<!--          v-model="queryParams.caculateDate"-->
<!--          placeholder="请输入分润计算日期时间"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="支付日期时间" prop="settleDate">-->
<!--        <el-input-->
<!--          v-model="queryParams.settleDate"-->
<!--          placeholder="请输入支付日期时间"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->

      <el-form-item label="支付状态" prop="settleStatus">
        <el-select v-model="queryParams.settleStatus" placeholder="请选择支付状态" clearable size="small">
          <el-option
            v-for="dict in settleStatusOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          ></el-option>
        </el-select>
      </el-form-item>
<!--      <el-form-item label="结算支付状态" prop="var1">-->
<!--        <el-input-->
<!--          v-model="queryParams.var1"-->
<!--          placeholder="请输入结算支付状态"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="结算支付状态" prop="var2">-->
<!--        <el-input-->
<!--          v-model="queryParams.var2"-->
<!--          placeholder="请输入结算支付状态"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="结算支付状态" prop="var3">-->
<!--        <el-input-->
<!--          v-model="queryParams.var3"-->
<!--          placeholder="请输入结算支付状态"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="结算支付状态" prop="var4">-->
<!--        <el-input-->
<!--          v-model="queryParams.var4"-->
<!--          placeholder="请输入结算支付状态"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="结算支付状态" prop="var5">-->
<!--        <el-input-->
<!--          v-model="queryParams.var5"-->
<!--          placeholder="请输入结算支付状态"-->
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
          @click="handleCaculate"
          v-hasPermi="['profit:settle:caculate']"
        >分润计算</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="multiple"
          @click="handleBatchSetllePayment"
          v-hasPermi="['profit:settle:payment']"
        >批量结算支付</el-button>
      </el-col>
<!--      <el-col :span="1.5">-->
<!--        <el-button-->
<!--          type="danger"-->
<!--		  plain-->
<!--          icon="el-icon-delete"-->
<!--          size="mini"-->
<!--          :disabled="multiple"-->
<!--          @click="handleDelete"-->
<!--          v-hasPermi="['profit:settle:remove']"-->
<!--        >删除</el-button>-->
<!--      </el-col>-->
      <el-col :span="1.5">
        <el-button
          type="warning"
		  plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['profit:settle:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="settleList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="结算主键" align="center" prop="settId" v-if="false"/>
      <el-table-column label="商户主键" align="center" prop="merchId" v-if="false"/>
      <el-table-column label="商户编号" align="center" prop="merchCode" width="180"/>
      <el-table-column label="商户名称" align="center" prop="merchName" width="200"/>
      <el-table-column label="月交易额" align="center" prop="monthAmount" />
      <el-table-column label="交易分润" align="center" prop="transProfit" />
      <el-table-column label="管理津贴" align="center" prop="manageAllowance" />
      <el-table-column label="钻石奖金" align="center" prop="diamondReward" />
      <el-table-column label="皇冠奖" align="center" prop="crownReward" />
      <el-table-column label="分红奖金" align="center" prop="bonusReward" />
      <el-table-column label="奖金总额" align="center" prop="rewardAmount" />
      <el-table-column label="计算年份" align="center" prop="caculateYear" />
      <el-table-column label="计算月份" align="center" prop="caculateMonth" :formatter="settleMonthFormat"/>
      <el-table-column label="计算日" align="center" prop="caculateDay" />
      <el-table-column label="计算时间" align="center" prop="caculateDate" width="155"/>
      <el-table-column label="结算支付时间" align="center" prop="settleDate" width="155"/>
      <el-table-column label="结算支付状态" align="center" prop="settleStatus" width="100" :formatter="settleStatusFormat"/>
<!--      <el-table-column label="结算支付状态" align="center" prop="var1" />-->
<!--      <el-table-column label="结算支付状态" align="center" prop="var2" />-->
<!--      <el-table-column label="结算支付状态" align="center" prop="var3" />-->
<!--      <el-table-column label="结算支付状态" align="center" prop="var4" />-->
<!--      <el-table-column label="结算支付状态" align="center" prop="var5" />-->
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleSettlePayment(scope.row)"
            v-hasPermi="['profit:settle:payment']"
          >结算支付</el-button>
<!--          <el-button-->
<!--            size="mini"-->
<!--            type="text"-->
<!--            icon="el-icon-delete"-->
<!--            @click="handleDelete(scope.row)"-->
<!--            v-hasPermi="['profit:settle:remove']"-->
<!--          >删除</el-button>-->
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

    <!-- 添加或修改分润结算信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="auto">
<!--        <el-form-item label="结算支付状态" prop="merchId" v-if="false">-->
<!--          <el-input v-model="form.merchId" placeholder="请输入结算支付状态" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="商户编号" prop="merchCode"  v-if="false">-->
<!--          <el-input v-model="form.merchCode" placeholder="请输入商户编号" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="商户名称" prop="merchName"  v-if="false">-->
<!--          <el-input v-model="form.merchName" placeholder="请输入商户名称" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="月交易额" prop="monthAmount"  v-if="false">-->
<!--          <el-input v-model="form.monthAmount" placeholder="请输入月交易额" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="交易分润" prop="transProfit"  v-if="false">-->
<!--          <el-input v-model="form.transProfit" placeholder="请输入交易分润" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="管理津贴" prop="manageAllowance"  v-if="false">-->
<!--          <el-input v-model="form.manageAllowance" placeholder="请输入管理津贴" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="钻石奖金" prop="diamondReward"  v-if="false">-->
<!--          <el-input v-model="form.diamondReward" placeholder="请输入钻石奖金" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="皇冠奖" prop="crownReward"  v-if="false">-->
<!--          <el-input v-model="form.crownReward" placeholder="请输入皇冠奖" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="分红奖金" prop="bonusReward"  v-if="false">-->
<!--          <el-input v-model="form.bonusReward" placeholder="请输入分红奖金" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="奖金分红总额" prop="rewardAmount"  v-if="false">-->
<!--          <el-input v-model="form.rewardAmount" placeholder="请输入奖金分红总额" />-->
<!--        </el-form-item>-->
        <el-form-item label="计算年份" prop="caculateYear" >
          <el-input v-model="form.caculateYear" placeholder="请输入计算年份" />
        </el-form-item>
        <el-form-item label="计算月份" prop="caculateMonth">
          <el-select v-model="form.caculateMonth" placeholder="请选择计算月份">
            <el-option
              v-for="dict in settleMonthOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
<!--        <el-form-item label="结算日" prop="caculateDay"  v-if="false">-->
<!--          <el-input v-model="form.caculateDay" placeholder="请输入结算日" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="分润计算日期时间" prop="caculateDate">-->
<!--          <el-input v-model="form.caculateDate" placeholder="请输入分润计算日期时间" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="支付日期时间" prop="settleDate">-->
<!--          <el-input v-model="form.settleDate" placeholder="请输入支付日期时间" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="结算支付状态">-->
<!--          <el-radio-group v-model="form.settleStatus">-->
<!--            <el-radio label="1">请选择字典生成</el-radio>-->
<!--          </el-radio-group>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="结算支付状态" prop="var1">-->
<!--          <el-input v-model="form.var1" placeholder="请输入结算支付状态" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="结算支付状态" prop="var2">-->
<!--          <el-input v-model="form.var2" placeholder="请输入结算支付状态" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="结算支付状态" prop="var3">-->
<!--          <el-input v-model="form.var3" placeholder="请输入结算支付状态" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="结算支付状态" prop="var4">-->
<!--          <el-input v-model="form.var4" placeholder="请输入结算支付状态" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="结算支付状态" prop="var5">-->
<!--          <el-input v-model="form.var5" placeholder="请输入结算支付状态" />-->
<!--        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">开始计算</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {profitCaculate,settlePayment,batchSettlePayment, listSettle, getSettle, delSettle, addSettle, updateSettle, exportSettle } from "@/api/profit/settle";

export default {
  name: "Settle",
  components: {
  },
  data() {
    return {
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
      // 分润结算信息表格数据
      settleList: [],
      settleStatusOptions: [],
      settleMonthOptions: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        merchId: undefined,
        merchCode: undefined,
        merchName: undefined,
        monthAmount: undefined,
        transProfit: undefined,
        manageAllowance: undefined,
        diamondReward: undefined,
        crownReward: undefined,
        bonusReward: undefined,
        rewardAmount: undefined,
        caculateYear: undefined,
        caculateMonth: undefined,
        caculateDay: undefined,
        caculateDate: undefined,
        settleDate: undefined,
        settleStatus: undefined,
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
        caculateMonth: [
          { required: true, message: "分润计算月份不能为空", trigger: "blur" }
        ],
        caculateYear: [
          { required: true, message: "分润计算年份不能为空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
    this.getDicts("settle_pay_status").then(response => {
      this.settleStatusOptions = response.data;
    });
    this.getDicts("settle_month").then(response => {
      this.settleMonthOptions = response.data;
    });
  },
  methods: {
    /** 查询分润结算信息列表 */
    getList() {
      this.loading = true;
      listSettle(this.queryParams).then(response => {
        this.settleList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 分润单位字典翻译
    settleStatusFormat(row, column) {
      return this.selectDictLabel(this.settleStatusOptions, row.settleStatus);
    },
    // 分润单位字典翻译
    settleMonthFormat(row, column) {
      return this.selectDictLabel(this.settleMonthOptions, row.caculateMonth);
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        // settId: undefined,
        // merchId: undefined,
        // merchCode: undefined,
        // merchName: undefined,
        // monthAmount: undefined,
        // transProfit: undefined,
        // manageAllowance: undefined,
        // diamondReward: undefined,
        // crownReward: undefined,
        // bonusReward: undefined,
        // rewardAmount: undefined,
        caculateYear: undefined,
        caculateMonth: undefined,
        // caculateDay: undefined,
        // caculateDate: undefined,
        // settleDate: undefined,
        // settleStatus: "0",
        // createBy: undefined,
        // createTime: undefined,
        // updateBy: undefined,
        // updateTime: undefined,
        // var1: undefined,
        // var2: undefined,
        // var3: undefined,
        // var4: undefined,
        // var5: undefined
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.settId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    handleBatchSetllePayment(){
      const settIds = this.ids
      batchSettlePayment(settIds).then(response=>{
        this.msgSuccess(response.msg);
        this.getList();
      })
    },
    handleSettlePayment(row){
      const settId = row.settId || this.ids;
      settlePayment(settId).then(response =>{
        this.msgSuccess(response.msg);
        this.getList();
      });
    },
    handleProfitCaculate(caculateYear,caculateMonth){
       this.open = false;
       this.loading = true;
       profitCaculate(caculateYear,caculateMonth).then(response =>{
         this.loading = false;
         this.msgSuccess(response.msg);
         this.getList();
       });
    },
    /** 新增按钮操作 */
    handleCaculate() {
      this.reset();
      this.form.caculateYear = new Date().getFullYear();
      this.open = true;
      this.title = "分润结算";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const settId = row.settId || this.ids
      getSettle(settId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改分润结算信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          // if (this.form.settId != null) {
          //   updateSettle(this.form).then(response => {
          //     this.msgSuccess("修改成功");
          //     this.open = false;
          //     this.getList();
          //   });
          // } else {
          //   addSettle(this.form).then(response => {
          //     this.msgSuccess("新增成功");
          //     this.open = false;
          //     this.getList();
          //   });
          // }
          if(this.form.caculateYear != null && this.form.caculateMonth != null){
            this.handleProfitCaculate(this.form.caculateYear,this.form.caculateMonth);
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const settIds = row.settId || this.ids;
      this.$confirm('是否确认删除分润结算信息编号为"' + settIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delSettle(settIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有分润结算信息数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportSettle(queryParams);
        }).then(response => {
          this.download(response.msg);
        })
    }
  }
};
</script>
