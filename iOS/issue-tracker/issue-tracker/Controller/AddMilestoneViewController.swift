//
//  AddMilestoneViewController.swift
//  issue-tracker
//
//  Created by Ador on 2021/06/17.
//

import UIKit
import RxSwift

class AddMilestoneViewController: UIViewController {

    private let disposeBag = DisposeBag()
    private let viewModel: MilestoneViewModel! = MilestoneViewModel()
    private lazy var tableView: UITableView = {
        let tableView = UITableView(frame: .zero, style: .grouped)
        tableView.register(AddTableViewCell.self, forCellReuseIdentifier: AddTableViewCell.reuseIdentifier)
        return tableView
    }()

    override func viewDidLoad() {
        super.viewDidLoad()

        navigationItem.title = "새로운 마일스톤"
        self.navigationItem.leftBarButtonItem = UIBarButtonItem(title: "뒤로",
                                                                style: .plain,
                                                                target: self,
                                                                action: nil)
        self.navigationItem.rightBarButtonItem = UIBarButtonItem(title: "저장",
                                                                 style: .plain,
                                                                 target: self,
                                                                 action: #selector(didTapSave))

        tableView.dataSource = self
        tableView.frame = view.bounds

        view.addSubview(tableView)
    }

    @objc
    private func didTapSave() {

    }
}

extension AddMilestoneViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 3
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: AddTableViewCell.reuseIdentifier, for: indexPath) as? AddTableViewCell else {
            fatalError()
        }
        if indexPath.row == 0 {
            cell.becomeFirstResponder()
        }
        let textLabel = ["제목", "설명", "완료일"]
        cell.textLabel?.text = textLabel[indexPath.row]
        cell.bind { textField in
            textField.rx.text
                .orEmpty
                .observe(on: MainScheduler.instance)
                .distinctUntilChanged()
                .debounce(.milliseconds(500), scheduler: MainScheduler.instance)
                .subscribe(onNext: { text in
                    let key = textLabel[indexPath.row]
                    self.viewModel.model[key] = text
                })
                .disposed(by: disposeBag)
        }
        return cell
    }
}
