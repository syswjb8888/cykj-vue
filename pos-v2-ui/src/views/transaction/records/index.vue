<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="auto">
      <el-form-item label="代理商账号" prop="agentNo">
        <el-input
          v-model="queryParams.agentNo"
          placeholder="请输入代理商账号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="平台唯一流水号" prop="keyRsp">
        <el-input
          v-model="queryParams.keyRsp"
          placeholder="请输入平台唯一流水号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="交易卡号" prop="cardNo">
        <el-input
          v-model="queryParams.cardNo"
          placeholder="请输入交易卡号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="发卡行名称" prop="cardBankName">
        <el-input
          v-model="queryParams.cardBankName"
          placeholder="请输入发卡行名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="交易类型" prop="transType">
        <el-select v-model="queryParams.transType" placeholder="请选择交易类型" clearable size="small">
          <el-option
            v-for="dict in transTypeOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="交易名称" prop="transName">
        <el-input
          v-model="queryParams.transName"
          placeholder="请输入交易名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="交易金额" prop="transAmount">
        <el-input
          v-model="queryParams.transAmount"
          placeholder="请输入交易金额"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商户号" prop="merchCode">
        <el-input
          v-model="queryParams.merchCode"
          placeholder="请输入商户号"
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
      <el-form-item label="SN号" prop="posCode">
        <el-input
          v-model="queryParams.posCode"
          placeholder="请输入SN号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="系统参考号" prop="retriRefNo">
        <el-input
          v-model="queryParams.retriRefNo"
          placeholder="请输入系统参考号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="交易卡类型" prop="cardClass">
        <el-input
          v-model="queryParams.cardClass"
          placeholder="请输入交易卡类型"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="手续费" prop="transFree">
        <el-input
          v-model="queryParams.transFree"
          placeholder="请输入手续费"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="交易日期" prop="transDate">
        <el-input
          v-model="queryParams.transDate"
          placeholder="请输入交易日期"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="交易时间" prop="transTime">
        <el-input
          v-model="queryParams.transTime"
          placeholder="请输入交易时间"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="行业类别" prop="category">
        <el-input
          v-model="queryParams.category"
          placeholder="请输入行业类别"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="支付方式" prop="posEntry">
        <el-input
          v-model="queryParams.posEntry"
          placeholder="请输入支付方式"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="冻结标识" prop="freezeFlag">
        <el-input
          v-model="queryParams.freezeFlag"
          placeholder="请输入冻结标识"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="精选标识" prop="choiceFlag">
        <el-input
          v-model="queryParams.choiceFlag"
          placeholder="请输入精选标识"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="服务费" prop="stlmFree">
        <el-input
          v-model="queryParams.stlmFree"
          placeholder="请输入服务费"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="通讯费" prop="commFree">
        <el-input
          v-model="queryParams.commFree"
          placeholder="请输入通讯费"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="通信规则" prop="commFreeRule">
        <el-input
          v-model="queryParams.commFreeRule"
          placeholder="请输入通信规则"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="通信规则" prop="var1">
        <el-input
          v-model="queryParams.var1"
          placeholder="请输入通信规则"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="通信规则" prop="var2">
        <el-input
          v-model="queryParams.var2"
          placeholder="请输入通信规则"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="通信规则" prop="var3">
        <el-input
          v-model="queryParams.var3"
          placeholder="请输入通信规则"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="通信规则" prop="var4">
        <el-input
          v-model="queryParams.var4"
          placeholder="请输入通信规则"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="通信规则" prop="var5">
        <el-input
          v-model="queryParams.var5"
          placeholder="请输入通信规则"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="通信规则" prop="var6">
        <el-input
          v-model="queryParams.var6"
          placeholder="请输入通信规则"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="通信规则" prop="var7">
        <el-input
          v-model="queryParams.var7"
          placeholder="请输入通信规则"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
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
          v-hasPermi="['transaction:records:add']"
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
          v-hasPermi="['transaction:records:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
		  plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['transaction:records:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
		  plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['transaction:records:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="recordsList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="交易记录主键" align="center" prop="transId" v-if="false"/>
      <el-table-column label="代理商账号" align="center" prop="agentNo" />
      <el-table-column label="平台唯一流水号" align="center" prop="keyRsp" />
      <el-table-column label="交易卡号" align="center" prop="cardNo" />
      <el-table-column label="发卡行名称" align="center" prop="cardBankName" />
      <el-table-column label="交易类型" align="center" prop="transType" :formatter="transTypeFormat" />
      <el-table-column label="交易名称" align="center" prop="transName" />
      <el-table-column label="交易金额" align="center" prop="transAmount" />
      <el-table-column label="商户号" align="center" prop="merchCode" />
      <el-table-column label="商户名称" align="center" prop="merchName" />
      <el-table-column label="SN号" align="center" prop="posCode" />
      <el-table-column label="系统参考号" align="center" prop="retriRefNo" />
      <el-table-column label="交易卡类型" align="center" prop="cardClass" />
      <el-table-column label="手续费" align="center" prop="transFree" />
      <el-table-column label="交易日期" align="center" prop="transDate" />
      <el-table-column label="交易时间" align="center" prop="transTime" />
      <el-table-column label="行业类别" align="center" prop="category" />
      <el-table-column label="支付方式" align="center" prop="posEntry" />
      <el-table-column label="冻结标识" align="center" prop="freezeFlag" />
      <el-table-column label="精选标识" align="center" prop="choiceFlag" />
      <el-table-column label="服务费" align="center" prop="stlmFree" />
      <el-table-column label="通讯费" align="center" prop="commFree" />
      <el-table-column label="通信规则" align="center" prop="commFreeRule" />
      <el-table-column label="通信规则" align="center" prop="var1" />
      <el-table-column label="通信规则" align="center" prop="var2" />
      <el-table-column label="通信规则" align="center" prop="var3" />
      <el-table-column label="通信规则" align="center" prop="var4" />
      <el-table-column label="通信规则" align="center" prop="var5" />
      <el-table-column label="通信规则" align="center" prop="var6" />
      <el-table-column label="通信规则" align="center" prop="var7" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['transaction:records:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['transaction:records:remove']"
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

    <!-- 添加或修改交易记录对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="代理商账号" prop="agentNo">
          <el-input v-model="form.agentNo" placeholder="请输入代理商账号" />
        </el-form-item>
        <el-form-item label="平台唯一流水号" prop="keyRsp">
          <el-input v-model="form.keyRsp" placeholder="请输入平台唯一流水号" />
        </el-form-item>
        <el-form-item label="交易卡号" prop="cardNo">
          <el-input v-model="form.cardNo" placeholder="请输入交易卡号" />
        </el-form-item>
        <el-form-item label="发卡行名称" prop="cardBankName">
          <el-input v-model="form.cardBankName" placeholder="请输入发卡行名称" />
        </el-form-item>
        <el-form-item label="交易类型" prop="transType">
          <el-select v-model="form.transType" placeholder="请选择交易类型">
            <el-option
              v-for="dict in transTypeOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="交易名称" prop="transName">
          <el-input v-model="form.transName" placeholder="请输入交易名称" />
        </el-form-item>
        <el-form-item label="交易金额" prop="transAmount">
          <el-input v-model="form.transAmount" placeholder="请输入交易金额" />
        </el-form-item>
        <el-form-item label="商户号" prop="merchCode">
          <el-input v-model="form.merchCode" placeholder="请输入商户号" />
        </el-form-item>
        <el-form-item label="商户名称" prop="merchName">
          <el-input v-model="form.merchName" placeholder="请输入商户名称" />
        </el-form-item>
        <el-form-item label="SN号" prop="posCode">
          <el-input v-model="form.posCode" placeholder="请输入SN号" />
        </el-form-item>
        <el-form-item label="系统参考号" prop="retriRefNo">
          <el-input v-model="form.retriRefNo" placeholder="请输入系统参考号" />
        </el-form-item>
        <el-form-item label="交易卡类型" prop="cardClass">
          <el-input v-model="form.cardClass" placeholder="请输入交易卡类型" />
        </el-form-item>
        <el-form-item label="手续费" prop="transFree">
          <el-input v-model="form.transFree" placeholder="请输入手续费" />
        </el-form-item>
        <el-form-item label="交易日期" prop="transDate">
          <el-input v-model="form.transDate" placeholder="请输入交易日期" />
        </el-form-item>
        <el-form-item label="交易时间" prop="transTime">
          <el-input v-model="form.transTime" placeholder="请输入交易时间" />
        </el-form-item>
        <el-form-item label="行业类别" prop="category">
          <el-input v-model="form.category" placeholder="请输入行业类别" />
        </el-form-item>
        <el-form-item label="支付方式" prop="posEntry">
          <el-input v-model="form.posEntry" placeholder="请输入支付方式" />
        </el-form-item>
        <el-form-item label="冻结标识" prop="freezeFlag">
          <el-input v-model="form.freezeFlag" placeholder="请输入冻结标识" />
        </el-form-item>
        <el-form-item label="精选标识" prop="choiceFlag">
          <el-input v-model="form.choiceFlag" placeholder="请输入精选标识" />
        </el-form-item>
        <el-form-item label="服务费" prop="stlmFree">
          <el-input v-model="form.stlmFree" placeholder="请输入服务费" />
        </el-form-item>
        <el-form-item label="通讯费" prop="commFree">
          <el-input v-model="form.commFree" placeholder="请输入通讯费" />
        </el-form-item>
        <el-form-item label="通信规则" prop="commFreeRule">
          <el-input v-model="form.commFreeRule" placeholder="请输入通信规则" />
        </el-form-item>
        <el-form-item label="通信规则" prop="var1">
          <el-input v-model="form.var1" placeholder="请输入通信规则" />
        </el-form-item>
        <el-form-item label="通信规则" prop="var2">
          <el-input v-model="form.var2" placeholder="请输入通信规则" />
        </el-form-item>
        <el-form-item label="通信规则" prop="var3">
          <el-input v-model="form.var3" placeholder="请输入通信规则" />
        </el-form-item>
        <el-form-item label="通信规则" prop="var4">
          <el-input v-model="form.var4" placeholder="请输入通信规则" />
        </el-form-item>
        <el-form-item label="通信规则" prop="var5">
          <el-input v-model="form.var5" placeholder="请输入通信规则" />
        </el-form-item>
        <el-form-item label="通信规则" prop="var6">
          <el-input v-model="form.var6" placeholder="请输入通信规则" />
        </el-form-item>
        <el-form-item label="通信规则" prop="var7">
          <el-input v-model="form.var7" placeholder="请输入通信规则" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listRecords, getRecords, delRecords, addRecords, updateRecords, exportRecords } from "@/api/transaction/records";

export default {
  name: "Records",
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
      // 交易记录表格数据
      recordsList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 交易类型字典
      transTypeOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        agentNo: undefined,
        keyRsp: undefined,
        cardNo: undefined,
        cardBankName: undefined,
        transType: undefined,
        transName: undefined,
        transAmount: undefined,
        merchCode: undefined,
        merchName: undefined,
        posCode: undefined,
        retriRefNo: undefined,
        cardClass: undefined,
        transFree: undefined,
        transDate: undefined,
        transTime: undefined,
        category: undefined,
        posEntry: undefined,
        freezeFlag: undefined,
        choiceFlag: undefined,
        stlmFree: undefined,
        commFree: undefined,
        commFreeRule: undefined,
        var1: undefined,
        var2: undefined,
        var3: undefined,
        var4: undefined,
        var5: undefined,
        var6: undefined,
        var7: undefined
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
    this.getDicts("trans_type").then(response => {
      this.transTypeOptions = response.data;
    });
  },
  methods: {
    /** 查询交易记录列表 */
    getList() {
      this.loading = true;
      listRecords(this.queryParams).then(response => {
        this.recordsList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 交易类型字典翻译
    transTypeFormat(row, column) {
      return this.selectDictLabel(this.transTypeOptions, row.transType);
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        transId: undefined,
        agentNo: undefined,
        keyRsp: undefined,
        cardNo: undefined,
        cardBankName: undefined,
        transType: undefined,
        transName: undefined,
        transAmount: undefined,
        merchCode: undefined,
        merchName: undefined,
        posCode: undefined,
        retriRefNo: undefined,
        cardClass: undefined,
        transFree: undefined,
        transDate: undefined,
        transTime: undefined,
        category: undefined,
        posEntry: undefined,
        freezeFlag: undefined,
        choiceFlag: undefined,
        stlmFree: undefined,
        commFree: undefined,
        commFreeRule: undefined,
        createBy: undefined,
        createTime: undefined,
        updateBy: undefined,
        updateTime: undefined,
        var1: undefined,
        var2: undefined,
        var3: undefined,
        var4: undefined,
        var5: undefined,
        var6: undefined,
        var7: undefined
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
      this.ids = selection.map(item => item.transId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加交易记录";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const transId = row.transId || this.ids
      getRecords(transId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改交易记录";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.transId != null) {
            updateRecords(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addRecords(this.form).then(response => {
              this.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const transIds = row.transId || this.ids;
      this.$confirm('是否确认删除交易记录编号为"' + transIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delRecords(transIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有交易记录数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportRecords(queryParams);
        }).then(response => {
          this.download(response.msg);
        })
    }
  }
};
</script>
