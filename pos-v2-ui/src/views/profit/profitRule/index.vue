<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">

      <el-form-item label="分润类型" prop="profitType">
        <el-select v-model="queryParams.profitType" placeholder="请选择分润类型" clearable size="small">
          <el-option
            v-for="dict in profitTypeOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
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
          v-hasPermi="['profit:profitRule:add']"
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
          v-hasPermi="['profit:profitRule:edit']"
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
          v-hasPermi="['profit:profitRule:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
		  plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['profit:profitRule:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="profitRuleList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="分润编号" align="center" prop="profitId" width="80"/>
      <el-table-column label="分润类型" align="center" prop="profitType" :formatter="profitTypeFormat" />
      <el-table-column label="分润档次" align="center" prop="profitLevel" />
      <el-table-column label="分润下限" align="center" prop="profitMin" />
      <el-table-column label="分润上限" align="center" prop="profitMax" width="115"/>
      <el-table-column label="分润单位" align="center" prop="profitUnit" :formatter="profitUnitFormat" />
      <el-table-column label="分润金额(单位:元)" align="center" prop="profitAmount" />
      <el-table-column label="分润封顶(单位:元)" align="center" prop="profitTop" />
      <el-table-column label="每月最低交易流水(单位:万元)" align="center" prop="monthlyMin" width="115"/>
      <el-table-column label="千万级交易流水团队数" align="center" prop="monthlyTomTeams"  width="90"/>
      <el-table-column label="分润封顶(单位:元)" align="center" prop="profitTop" />
      <el-table-column label="备注" align="center" prop="remark" width="300"/>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['profit:profitRule:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['profit:profitRule:remove']"
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

    <!-- 添加或修改分润规则制订对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="600px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="auto">
        <el-form-item label="分润下限" prop="profitMin">
          <el-input v-model="form.profitMin" placeholder="请输入分润下限" />
        </el-form-item>
        <el-form-item label="分润上限" prop="profitMax">
          <el-input v-model="form.profitMax" placeholder="请输入分润上限" />
        </el-form-item>
        <el-form-item label="分润单位" prop="profitUnit">
          <el-select v-model="form.profitUnit" placeholder="请选择分润单位">
            <el-option
              v-for="dict in profitUnitOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分润类型" prop="profitType">
          <el-select v-model="form.profitType" placeholder="请选择分润类型">
            <el-option
              v-for="dict in profitTypeOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分润金额" prop="profitAmount">
          <el-input v-model="form.profitAmount" placeholder="请输入分润金额" />
        </el-form-item>
        <el-form-item label="分润封顶" prop="profitTop">
          <el-input v-model="form.profitTop" placeholder="请输入分润封顶" />
        </el-form-item>
        <el-form-item label="分润档次" prop="profitLevel">
          <el-input v-model="form.profitLevel" placeholder="请输入分润档次" />
        </el-form-item>
        <el-form-item label="每月最低交易流水(单位:万元)" prop="monthlyMin">
          <el-input v-model="form.monthlyMin" placeholder="请输入每月最低交易流水" />
        </el-form-item>
        <el-form-item label="千万级交易流水团队数" prop="monthlyTomTeams">
          <el-input v-model="form.monthlyTomTeams" placeholder="请输入千万级交易流水团队数" />
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" placeholder="请输入分润档次" />
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
import { listProfitRule, getProfitRule, delProfitRule, addProfitRule, updateProfitRule, exportProfitRule } from "@/api/profit/profitRule";

export default {
  name: "ProfitRule",
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
      // 分润规则制订表格数据
      profitRuleList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 分润单位字典
      profitUnitOptions: [],
      // 分润类型字典
      profitTypeOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        profitMin: undefined,
        profitMax: undefined,
        profitUnit: undefined,
        profitType: undefined,
        profitAmount: undefined,
        profitTop: undefined,
        profitLevel: undefined,
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
    this.getDicts("profit_unit_type").then(response => {
      this.profitUnitOptions = response.data;
    });
    this.getDicts("profit_type").then(response => {
      this.profitTypeOptions = response.data;
    });
  },
  methods: {
    /** 查询分润规则制订列表 */
    getList() {
      this.loading = true;
      listProfitRule(this.queryParams).then(response => {
        this.profitRuleList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 分润单位字典翻译
    profitUnitFormat(row, column) {
      return this.selectDictLabel(this.profitUnitOptions, row.profitUnit);
    },
    // 分润类型字典翻译
    profitTypeFormat(row, column) {
      return this.selectDictLabel(this.profitTypeOptions, row.profitType);
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        profitId: undefined,
        profitMin: undefined,
        profitMax: undefined,
        profitUnit: undefined,
        profitType: undefined,
        profitAmount: undefined,
        profitTop: undefined,
        profitLevel: undefined,
        createTime: undefined,
        createBy: undefined,
        updateTime: undefined,
        updateBy: undefined,
        remark: undefined
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
      this.ids = selection.map(item => item.profitId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加分润规则制订";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const profitId = row.profitId || this.ids
      getProfitRule(profitId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改分润规则制订";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.profitId != null) {
            updateProfitRule(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addProfitRule(this.form).then(response => {
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
      const profitIds = row.profitId || this.ids;
      this.$confirm('是否确认删除分润规则制订编号为"' + profitIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delProfitRule(profitIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有分润规则制订数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportProfitRule(queryParams);
        }).then(response => {
          this.download(response.msg);
        })
    }
  }
};
</script>
