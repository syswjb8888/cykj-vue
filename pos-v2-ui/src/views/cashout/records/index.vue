<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="auto">
      <el-form-item label="提现金额" prop="cashoutAmount">
        <el-input
          v-model="queryParams.cashoutAmount"
          placeholder="请输入提现金额"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="支付银行账户" prop="dealAccount">
        <el-input
          v-model="queryParams.dealAccount"
          placeholder="请输入支付银行账户"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="提出账户所属银行" prop="dealBank">
        <el-input
          v-model="queryParams.dealBank"
          placeholder="请输入提出账户所属银行"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="提现类型" prop="cashoutType">
        <el-select v-model="queryParams.cashoutType" placeholder="请选择提现类型" clearable size="small">
          <el-option
            v-for="dict in cashoutTypeOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="提现类型" prop="var1">
        <el-input
          v-model="queryParams.var1"
          placeholder="请输入提现类型"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="提现类型" prop="var2">
        <el-input
          v-model="queryParams.var2"
          placeholder="请输入提现类型"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="提现类型" prop="var3">
        <el-input
          v-model="queryParams.var3"
          placeholder="请输入提现类型"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="提现类型" prop="var4">
        <el-input
          v-model="queryParams.var4"
          placeholder="请输入提现类型"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="提现类型" prop="var5">
        <el-input
          v-model="queryParams.var5"
          placeholder="请输入提现类型"
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
          v-hasPermi="['cashout:records:add']"
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
          v-hasPermi="['cashout:records:edit']"
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
          v-hasPermi="['cashout:records:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
		  plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['cashout:records:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="recordsList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="提现主键" align="center" prop="cashoutId" v-if="false"/>
      <el-table-column label="提现金额" align="center" prop="cashoutAmount" />
      <el-table-column label="支付银行账户" align="center" prop="dealAccount" />
      <el-table-column label="提出账户所属银行" align="center" prop="dealBank" />
      <el-table-column label="提现类型" align="center" prop="cashoutType" :formatter="cashoutTypeFormat" />
      <el-table-column label="提出日期时间" align="center" prop="var1" />
      <el-table-column label="提出日期时间" align="center" prop="var2" />
      <el-table-column label="提出日期时间" align="center" prop="var3" />
      <el-table-column label="提出日期时间" align="center" prop="var4" />
      <el-table-column label="提出日期时间" align="center" prop="var5" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['cashout:records:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['cashout:records:remove']"
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

    <!-- 添加或修改提现记录对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="提现金额" prop="cashoutAmount">
          <el-input v-model="form.cashoutAmount" placeholder="请输入提现金额" />
        </el-form-item>
        <el-form-item label="支付银行账户" prop="dealAccount">
          <el-input v-model="form.dealAccount" placeholder="请输入支付银行账户" />
        </el-form-item>
        <el-form-item label="提出账户所属银行" prop="dealBank">
          <el-input v-model="form.dealBank" placeholder="请输入提出账户所属银行" />
        </el-form-item>
        <el-form-item label="提现类型" prop="cashoutType">
          <el-select v-model="form.cashoutType" placeholder="请选择提现类型">
            <el-option
              v-for="dict in cashoutTypeOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="提现类型" prop="var1">
          <el-input v-model="form.var1" placeholder="请输入提现类型" />
        </el-form-item>
        <el-form-item label="提现类型" prop="var2">
          <el-input v-model="form.var2" placeholder="请输入提现类型" />
        </el-form-item>
        <el-form-item label="提现类型" prop="var3">
          <el-input v-model="form.var3" placeholder="请输入提现类型" />
        </el-form-item>
        <el-form-item label="提现类型" prop="var4">
          <el-input v-model="form.var4" placeholder="请输入提现类型" />
        </el-form-item>
        <el-form-item label="提现类型" prop="var5">
          <el-input v-model="form.var5" placeholder="请输入提现类型" />
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
import { listRecords, getRecords, delRecords, addRecords, updateRecords, exportRecords } from "@/api/cashout/records";

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
      // 提现记录表格数据
      recordsList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 提现类型字典
      cashoutTypeOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        cashoutAmount: undefined,
        dealAccount: undefined,
        dealBank: undefined,
        cashoutType: undefined,
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
        dealAccount: [
          { required: true, message: "支付银行账户不能为空", trigger: "blur" }
        ],
        createBy: [
          { required: true, message: "提现人不能为空", trigger: "blur" }
        ],
        createTime: [
          { required: true, message: "提出日期时间不能为空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
    this.getDicts("cashout_status").then(response => {
      this.cashoutTypeOptions = response.data;
    });
  },
  methods: {
    /** 查询提现记录列表 */
    getList() {
      this.loading = true;
      listRecords(this.queryParams).then(response => {
        this.recordsList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 提现类型字典翻译
    cashoutTypeFormat(row, column) {
      return this.selectDictLabel(this.cashoutTypeOptions, row.cashoutType);
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        cashoutId: undefined,
        cashoutAmount: undefined,
        dealAccount: undefined,
        dealBank: undefined,
        cashoutType: undefined,
        createBy: undefined,
        createTime: undefined,
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
      this.ids = selection.map(item => item.cashoutId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加提现记录";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const cashoutId = row.cashoutId || this.ids
      getRecords(cashoutId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改提现记录";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.cashoutId != null) {
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
      const cashoutIds = row.cashoutId || this.ids;
      this.$confirm('是否确认删除提现记录编号为"' + cashoutIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delRecords(cashoutIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有提现记录数据项?', "警告", {
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
