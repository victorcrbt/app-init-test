type Options = {
  name: string;
  dependsOn: string | string[];
};

export class Bootstrap {
  private tasks: any[] = [];
  private executedTasks: any[] = [];

  async run() {
    console.time("StartUp");
    console.log('***** [Start Task]: Inicialização de módulos sem dependência');
    await this.executeDependecylessTask();
    console.log('***** [Finish Task]: Inicialização de módulos sem dependência');

    console.log('\n\n');

    console.log('***** [Start Task]: Inicialização de módulos com dependência');
    await this.executeDepentTasks();
    console.log('***** [Finish Task]: Inicialização de módulos com dependência');
    console.timeEnd("StartUp");
  }

  private async executeDependecylessTask() {
    const dependlessTasks = this.tasks.filter(
      (task) => !task.dependsOn || (task.dependsOn && task.dependsOn <= 0)
    );
    const tasks = dependlessTasks.map(
      (task) =>
        new Promise(async (resolve) => {
          await task.runner();
          this.executedTasks.push(task.name);
          resolve(undefined);
        })
    );
    await Promise.all(tasks);
  }

  private async executeDepentTasks() {
    if (this.isAllTasksExecuted()) return;
    const dependentTasks = this.tasks.filter(
      (task) => task.dependsOn && !this.executedTasks.includes(task.name)
    );
    const tasks = dependentTasks.map((task) => {
      const isDepencyExecuted = this.executedTasks.includes(task.dependsOn);
      if (!isDepencyExecuted) return null;
      return new Promise(async (resolve) => {
        await task.runner();
        this.executedTasks.push(task.name);
        resolve(undefined);
      });
    });
    const validTasks = tasks.filter(Boolean);
    await Promise.all(validTasks);
    await this.executeDepentTasks();
  }

  private isAllTasksExecuted() {
    return this.executedTasks.length === this.tasks.length;
  }

  addTask(task: any, options?: Options) {
    this.tasks.push({
      runner: task,
      ...options,
    });
  }
}
