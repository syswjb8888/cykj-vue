<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="auto">
      <el-form-item label="验证码" prop="verCode">
        <el-input
          v-model="queryParams.verCode"
          placeholder="请输入验证码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="发送时间" prop="verStarttime">
        <el-date-picker clearable size="small"
          v-model="queryParams.verStarttime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择发送时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="到期时间" prop="verEndtime">
        <el-date-picker clearable size="small"
          v-model="queryParams.verEndtime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择到期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="验证码状态" prop="verStatus">
        <el-select v-model="queryParams.verStatus" placeholder="请选择验证码状态" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="手机号" prop="verMobile">
        <el-input
          v-model="queryParams.verMobile"
          placeholder="请输入手机号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="验证码用户" prop="verUserId">
        <el-input
          v-model="queryParams.verUserId"
          placeholder="请输入验证码用户"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="验证码用户" prop="var1">
        <el-input
          v-model="queryParams.var1"
          placeholder="请输入验证码用户"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="验证码用户" prop="var2">
        <el-input
          v-model="queryParams.var2"
          placeholder="请输入验证码用户"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="验证码用户" prop="var3">
        <el-input
          v-model="queryParams.var3"
          placeholder="请输入验证码用户"
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
          v-hasPermi="['verifycode:verifycode:add']"
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
          v-hasPermi="['verifycode:verifycode:edit']"
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
          v-hasPermi="['verifycode:verifycode:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
		  plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['verifycode:verifycode:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="verifycodeList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="验证码主键" align="center" prop="verId" v-if="false"/>
      <el-table-column label="验证码" align="center" prop="verCode" />
      <el-table-column label="发送时间" align="center" prop="verStarttime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.verStarttime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="到期时间" align="center" prop="verEndtime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.verEndtime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="验证码状态" align="center" prop="verStatus" />
      <el-table-column label="手机号" align="center" prop="verMobile" />
      <el-table-column label="验证码用户" align="center" prop="verUserId" />
      <el-table-column label="验证码用户" align="center" prop="var1" />
      <el-table-column label="验证码用户" align="center" prop="var2" />
      <el-table-column label="验证码用户" align="center" prop="var3" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['verifycode:verifycode:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['verifycode:verifycode:remove']"
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

    <!-- 添加或修改短信验证码对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="验证码" prop="verCode">
          <el-input v-model="form.verCode" placeholder="请输入验证码" />
        </el-form-item>
        <el-form-item label="发送时间" prop="verStarttime">
          <el-date-picker clearable size="small"
            v-model="form.verStarttime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择发送时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="到期时间" prop="verEndtime">
          <el-date-picker clearable size="small"
            v-model="form.verEndtime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择到期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="验证码状态">
          <el-radio-group v-model="form.verStatus">
            <el-radio label="1">请选择字典生成</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="手机号" prop="verMobile">
          <el-input v-model="form.verMobile" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item label="验证码用户" prop="verUserId">
          <el-input v-model="form.verUserId" placeholder="请输入验证码用户" />
        </el-form-item>
        <el-form-item label="验证码用户" prop="var1">
          <el-input v-model="form.var1" placeholder="请输入验证码用户" />
        </el-form-item>
        <el-form-item label="验证码用户" prop="var2">
          <el-input v-model="form.var2" placeholder="请输入验证码用户" />
        </el-form-item>
        <el-form-item label="验证码用户" prop="var3">
          <el-input v-model="form.var3" placeholder="请输入验证码用户" />
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
import { listVerifycode, getVerifycode, delVerifycode, addVerifycode, updateVerifycode, exportVerifycode } from "@/api/verifycode/verifycode";

export default {
  name: "Verifycode",
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
      // 短信验证码表格数据
      verifycodeList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        verCode: undefined,
        verStarttime: undefined,
        verEndtime: undefined,
        verStatus: undefined,
        verMobile: undefined,
        verUserId: undefined,
        var1: undefined,
        var2: undefined,
        var3: undefined
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
  },
  methods: {
    /** 查询短信验证码列表 */
    getList() {
      this.loading = true;
      listVerifycode(this.queryParams).then(response => {
        this.verifycodeList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        verId: undefined,
        verCode: undefined,
        verStarttime: undefined,
        verEndtime: undefined,
        verStatus: 0,
        verMobile: undefined,
        verUserId: undefined,
        var1: undefined,
        var2: undefined,
        var3: undefined
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
      this.ids = selection.map(item => item.verId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加短信验证码";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const verId = row.verId || this.ids
      getVerifycode(verId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改短信验证码";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.verId != null) {
            updateVerifycode(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addVerifycode(this.form).then(response => {
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
      const verIds = row.verId || this.ids;
      this.$confirm('是否确认删除短信验证码编号为"' + verIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delVerifycode(verIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有短信验证码数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportVerifycode(queryParams);
        }).then(response => {
          this.download(response.msg);
        })
    }
  }
};
</script>
