<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="auto">
      <el-form-item label="操作POS终端" prop="posId">
        <el-input
          v-model="queryParams.posId"
          placeholder="请输入操作POS终端"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="终端SN系列号" prop="posCode">
        <el-input
          v-model="queryParams.posCode"
          placeholder="请输入终端SN系列号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="原归属商户" prop="oldMerchId">
        <el-input
          v-model="queryParams.oldMerchId"
          placeholder="请输入原归属商户"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="现归属商户" prop="newMerchId">
        <el-input
          v-model="queryParams.newMerchId"
          placeholder="请输入现归属商户"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="操作人" prop="operator">
        <el-input
          v-model="queryParams.operator"
          placeholder="请输入操作人"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="划拔时间" prop="operateTime">
        <el-date-picker clearable size="small"
          v-model="queryParams.operateTime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择划拔时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="操作类型" prop="operateType">
        <el-select v-model="queryParams.operateType" placeholder="请选择操作类型" clearable size="small">
          <el-option
            v-for="dict in operateTypeOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="操作类型" prop="var1">
        <el-input
          v-model="queryParams.var1"
          placeholder="请输入操作类型"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="操作类型" prop="var2">
        <el-input
          v-model="queryParams.var2"
          placeholder="请输入操作类型"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="操作类型" prop="var3">
        <el-input
          v-model="queryParams.var3"
          placeholder="请输入操作类型"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="操作类型" prop="var4">
        <el-input
          v-model="queryParams.var4"
          placeholder="请输入操作类型"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="操作类型" prop="var5">
        <el-input
          v-model="queryParams.var5"
          placeholder="请输入操作类型"
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
          v-hasPermi="['operation:records:add']"
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
          v-hasPermi="['operation:records:edit']"
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
          v-hasPermi="['operation:records:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
		  plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['operation:records:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="recordsList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="操作主键" align="center" prop="operId" v-if="false"/>
      <el-table-column label="操作POS终端" align="center" prop="posId" />
      <el-table-column label="终端SN系列号" align="center" prop="posCode" />
      <el-table-column label="原归属商户" align="center" prop="oldMerchId" />
      <el-table-column label="现归属商户" align="center" prop="newMerchId" />
      <el-table-column label="操作人" align="center" prop="operator" />
      <el-table-column label="划拔时间" align="center" prop="operateTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.operateTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作类型" align="center" prop="operateType" :formatter="operateTypeFormat" />
      <el-table-column label="操作类型" align="center" prop="var1" />
      <el-table-column label="操作类型" align="center" prop="var2" />
      <el-table-column label="操作类型" align="center" prop="var3" />
      <el-table-column label="操作类型" align="center" prop="var4" />
      <el-table-column label="操作类型" align="center" prop="var5" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['operation:records:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['operation:records:remove']"
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

    <!-- 添加或修改划拔回调记录对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="操作POS终端" prop="posId">
          <el-input v-model="form.posId" placeholder="请输入操作POS终端" />
        </el-form-item>
        <el-form-item label="终端SN系列号" prop="posCode">
          <el-input v-model="form.posCode" placeholder="请输入终端SN系列号" />
        </el-form-item>
        <el-form-item label="原归属商户" prop="oldMerchId">
          <el-input v-model="form.oldMerchId" placeholder="请输入原归属商户" />
        </el-form-item>
        <el-form-item label="现归属商户" prop="newMerchId">
          <el-input v-model="form.newMerchId" placeholder="请输入现归属商户" />
        </el-form-item>
        <el-form-item label="操作人" prop="operator">
          <el-input v-model="form.operator" placeholder="请输入操作人" />
        </el-form-item>
        <el-form-item label="划拔时间" prop="operateTime">
          <el-date-picker clearable size="small"
            v-model="form.operateTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择划拔时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="操作类型" prop="operateType">
          <el-select v-model="form.operateType" placeholder="请选择操作类型">
            <el-option
              v-for="dict in operateTypeOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="parseInt(dict.dictValue)"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="操作类型" prop="var1">
          <el-input v-model="form.var1" placeholder="请输入操作类型" />
        </el-form-item>
        <el-form-item label="操作类型" prop="var2">
          <el-input v-model="form.var2" placeholder="请输入操作类型" />
        </el-form-item>
        <el-form-item label="操作类型" prop="var3">
          <el-input v-model="form.var3" placeholder="请输入操作类型" />
        </el-form-item>
        <el-form-item label="操作类型" prop="var4">
          <el-input v-model="form.var4" placeholder="请输入操作类型" />
        </el-form-item>
        <el-form-item label="操作类型" prop="var5">
          <el-input v-model="form.var5" placeholder="请输入操作类型" />
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
import { listRecords, getRecords, delRecords, addRecords, updateRecords, exportRecords } from "@/api/operation/records";

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
      // 划拔回调记录表格数据
      recordsList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 操作类型字典
      operateTypeOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        posId: undefined,
        posCode: undefined,
        oldMerchId: undefined,
        newMerchId: undefined,
        operator: undefined,
        operateTime: undefined,
        operateType: undefined,
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
        posId: [
          { required: true, message: "操作POS终端不能为空", trigger: "blur" }
        ],
        oldMerchId: [
          { required: true, message: "原归属商户不能为空", trigger: "blur" }
        ],
        newMerchId: [
          { required: true, message: "现归属商户不能为空", trigger: "blur" }
        ],
        operator: [
          { required: true, message: "操作人不能为空", trigger: "blur" }
        ],
        operateTime: [
          { required: true, message: "划拔时间不能为空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
    this.getDicts("pos_operate_type").then(response => {
      this.operateTypeOptions = response.data;
    });
  },
  methods: {
    /** 查询划拔回调记录列表 */
    getList() {
      this.loading = true;
      listRecords(this.queryParams).then(response => {
        this.recordsList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 操作类型字典翻译
    operateTypeFormat(row, column) {
      return this.selectDictLabel(this.operateTypeOptions, row.operateType);
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        operId: undefined,
        posId: undefined,
        posCode: undefined,
        oldMerchId: undefined,
        newMerchId: undefined,
        operator: undefined,
        operateTime: undefined,
        operateType: undefined,
        createTime: undefined,
        createBy: undefined,
        updateTime: undefined,
        updateBy: undefined,
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
      this.ids = selection.map(item => item.operId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加划拔回调记录";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const operId = row.operId || this.ids
      getRecords(operId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改划拔回调记录";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.operId != null) {
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
      const operIds = row.operId || this.ids;
      this.$confirm('是否确认删除划拔回调记录编号为"' + operIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delRecords(operIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有划拔回调记录数据项?', "警告", {
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
