<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="auto">
      <el-form-item label="钱包用户" prop="userId">
        <el-input
          v-model="queryParams.userId"
          placeholder="请输入钱包用户"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="交易分润" prop="profitAmount">
        <el-input
          v-model="queryParams.profitAmount"
          placeholder="请输入交易分润"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="分红奖金" prop="rewardAmount">
        <el-input
          v-model="queryParams.rewardAmount"
          placeholder="请输入分红奖金"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="钱包总额" prop="walletAmount">
        <el-input
          v-model="queryParams.walletAmount"
          placeholder="请输入钱包总额"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="提现状态" prop="cashoutStatus">
        <el-select v-model="queryParams.cashoutStatus" placeholder="请选择提现状态" clearable size="small">
          <el-option
            v-for="dict in cashoutStatusOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="提现状态" prop="var1">
        <el-input
          v-model="queryParams.var1"
          placeholder="请输入提现状态"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="提现状态" prop="var2">
        <el-input
          v-model="queryParams.var2"
          placeholder="请输入提现状态"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="提现状态" prop="var3">
        <el-input
          v-model="queryParams.var3"
          placeholder="请输入提现状态"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="提现状态" prop="var4">
        <el-input
          v-model="queryParams.var4"
          placeholder="请输入提现状态"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="提现状态" prop="var5">
        <el-input
          v-model="queryParams.var5"
          placeholder="请输入提现状态"
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
          v-hasPermi="['merchant:wallet:add']"
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
          v-hasPermi="['merchant:wallet:edit']"
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
          v-hasPermi="['merchant:wallet:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
		  plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['merchant:wallet:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="walletList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="钱包主键" align="center" prop="walletId" v-if="false"/>
      <el-table-column label="钱包用户" align="center" prop="userId" />
      <el-table-column label="交易分润" align="center" prop="profitAmount" />
      <el-table-column label="分红奖金" align="center" prop="rewardAmount" />
      <el-table-column label="钱包总额" align="center" prop="walletAmount" />
      <el-table-column label="提现状态" align="center" prop="cashoutStatus" :formatter="cashoutStatusFormat" />
      <el-table-column label="提现状态" align="center" prop="var1" />
      <el-table-column label="提现状态" align="center" prop="var2" />
      <el-table-column label="提现状态" align="center" prop="var3" />
      <el-table-column label="提现状态" align="center" prop="var4" />
      <el-table-column label="提现状态" align="center" prop="var5" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['merchant:wallet:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['merchant:wallet:remove']"
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

    <!-- 添加或修改商户钱包对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="钱包用户" prop="userId">
          <el-input v-model="form.userId" placeholder="请输入钱包用户" />
        </el-form-item>
        <el-form-item label="交易分润" prop="profitAmount">
          <el-input v-model="form.profitAmount" placeholder="请输入交易分润" />
        </el-form-item>
        <el-form-item label="分红奖金" prop="rewardAmount">
          <el-input v-model="form.rewardAmount" placeholder="请输入分红奖金" />
        </el-form-item>
        <el-form-item label="钱包总额" prop="walletAmount">
          <el-input v-model="form.walletAmount" placeholder="请输入钱包总额" />
        </el-form-item>
        <el-form-item label="提现状态" prop="cashoutStatus">
          <el-select v-model="form.cashoutStatus" placeholder="请选择提现状态">
            <el-option
              v-for="dict in cashoutStatusOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="提现状态" prop="var1">
          <el-input v-model="form.var1" placeholder="请输入提现状态" />
        </el-form-item>
        <el-form-item label="提现状态" prop="var2">
          <el-input v-model="form.var2" placeholder="请输入提现状态" />
        </el-form-item>
        <el-form-item label="提现状态" prop="var3">
          <el-input v-model="form.var3" placeholder="请输入提现状态" />
        </el-form-item>
        <el-form-item label="提现状态" prop="var4">
          <el-input v-model="form.var4" placeholder="请输入提现状态" />
        </el-form-item>
        <el-form-item label="提现状态" prop="var5">
          <el-input v-model="form.var5" placeholder="请输入提现状态" />
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
import { listWallet, getWallet, delWallet, addWallet, updateWallet, exportWallet } from "@/api/merchant/wallet";

export default {
  name: "Wallet",
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
      // 商户钱包表格数据
      walletList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 提现状态字典
      cashoutStatusOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userId: undefined,
        profitAmount: undefined,
        rewardAmount: undefined,
        walletAmount: undefined,
        cashoutStatus: undefined,
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
      }
    };
  },
  created() {
    this.getList();
    this.getDicts("cashout_status").then(response => {
      this.cashoutStatusOptions = response.data;
    });
  },
  methods: {
    /** 查询商户钱包列表 */
    getList() {
      this.loading = true;
      listWallet(this.queryParams).then(response => {
        this.walletList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 提现状态字典翻译
    cashoutStatusFormat(row, column) {
      return this.selectDictLabel(this.cashoutStatusOptions, row.cashoutStatus);
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        walletId: undefined,
        userId: undefined,
        profitAmount: undefined,
        rewardAmount: undefined,
        walletAmount: undefined,
        cashoutStatus: undefined,
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
      this.ids = selection.map(item => item.walletId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加商户钱包";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const walletId = row.walletId || this.ids
      getWallet(walletId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改商户钱包";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.walletId != null) {
            updateWallet(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addWallet(this.form).then(response => {
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
      const walletIds = row.walletId || this.ids;
      this.$confirm('是否确认删除商户钱包编号为"' + walletIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delWallet(walletIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有商户钱包数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportWallet(queryParams);
        }).then(response => {
          this.download(response.msg);
        })
    }
  }
};
</script>
